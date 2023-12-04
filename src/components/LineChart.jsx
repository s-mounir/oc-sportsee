import styled from 'styled-components';
import * as d3 from "d3";
import { useState } from "react";

import { LineChartTooltip } from './LineChartTooltip'

const LineChartDiv = styled.div`
  grid-area: 3 / 1 / 5 / 2; 
  background: #FF0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  position: relative;
`

function LineChart(props) {
  const dataset = props.data;

  const getWidth = props.width;
  const width = getWidth<50 ? 50 : getWidth;
  const height = 250;
  const marginTop = 50;
  const marginRight = 0;
  const marginBottom = 50;
  const marginLeft = 0;

  const barWidth = (width - marginRight - marginLeft) / dataset.length;

  const x = d3.scaleBand()
    .domain(dataset)
    .range([0,width])
  const y = d3.scaleLinear()
    .domain([d3.min(dataset,(d) => d.sessionLength),d3.max(dataset,(d) => d.sessionLength)])
    .range([height-marginBottom,marginTop])

  const line = d3.line()
                  .x((d,i) => (barWidth * i) + (barWidth)/2)
                  .y((d) => y(d.sessionLength))
                  .curve(d3.curveCatmullRom.alpha(0.5));

  const [hovered, setHovered] = useState(null);

  function mouseover(evt,d,i){
    setHovered({
      xPos: (barWidth * i) + (barWidth)/2,
      yPos: y(d.sessionLength),
      session: d.sessionLength,
    })
  }
  function mouseout(evt){
    setHovered(null);
  }

    return (
      <LineChartDiv>
        <svg width={width} height={height}>
          <text x="32" y="40" fontFamily='Roboto' fontWeight='500' fontSize='15px' fill='#FFFFFF' opacity='0.5'>Durée moyenne des sessions</text>
          <path 
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="1.5" 
            d={line(dataset)} />
          {dataset.map((d,i) => (<text  key={"jour"+i} 
                                      x={(barWidth * i) + (barWidth)/2} 
                                      y={height-marginBottom + 30}
                                      fontFamily='Roboto' 
                                      fontWeight='500' 
                                      fontSize='12px' 
                                      fill='#FFFFFF'
                                      opacity='0.5'
                                      textAnchor='middle'
                                >{d.day}</text>))}
          <g transform={"translate("+marginLeft+" "+marginTop+")"}>
        {dataset.map((d,i) => (<rect  key={"mouseover"+i} 
                                      x={barWidth * i} 
                                      y="0" 
                                      width={barWidth} 
                                      height={height-marginBottom-marginTop}
                                      fill="#C4C4C4" 
                                      opacity="0" 
                                      onMouseOver={(evt) => mouseover(evt,d,i)}
                                      onMouseOut={(evt) => mouseout(evt)} />))}
      </g>
        </svg>
        <div>
          <LineChartTooltip interactionData={hovered}/>
        </div>
      </LineChartDiv>
    );
  }
  
  export default LineChart
