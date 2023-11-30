import styled from 'styled-components';
import * as d3 from "d3";

const RadialBarChartDiv = styled.div`
  grid-area: 3 / 3 / 5 / 4;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadialBarChart(props) {
  const getWidth = props.width;
  const width = getWidth<50 ? 50 : getWidth;
  const height = 250;

  const data = props.data>=0&props.data<=100?props.data:0;
  const center = {x:width/2, y:height/2};
  const smallerSize = Math.min( width,height)
  const r = smallerSize* 0.35;
  const offset = Math.PI;
  const scale = d3.scaleLinear()
    .domain([0,1])
    .range([2*Math.PI,0]);

  const point = {
      x: center.x + ( r * Math.sin( offset - scale(data))),
      y: center.y + ( r * Math.cos( offset - scale(data)))
    };
  const path="M ".concat(center.x," ",center.y-r," A ",r," ",r," 0 0 0 ",point.x," ",point.y)
  
  //"M 125 45 A 80 80 0 0 0 ".concat(point.x," ",point.y)

    return (
      <RadialBarChartDiv>
        <svg width={width} height={height}>
          <text x="32" y="40" fontFamily='Roboto' fontWeight='500' fontSize='15px' fill='#20253A'>Score</text>
          <circle cx={width/2} cy={height/2} r={r} fill="#FFFFFF"/>
          <text x={width/2 - 24} y="115" fontFamily='Roboto' fontWeight='500' fontSize='26px' fill='#282D30'>{data*100 + "%"}</text>
          <text x={width/2 - 33} y="135" fontFamily='Roboto' fontWeight='500' fontSize='18px' fill='#74798C'>de votre</text>
          <text x={width/2 - 30} y="155" fontFamily='Roboto' fontWeight='500' fontSize='18px' fill='#74798C'>objectif</text>
          <g>
            <path d={path} fill="none" stroke="#FF0000" strokeWidth="10"></path>
            <circle cx={width/2} cy={height/2 - r} r="5" fill="#FF0000"/>
            <circle cx={point.x} cy={point.y} r="5" fill="#FF0000"/>
          </g>
        </svg>
      </RadialBarChartDiv>
    );
  }
  
  export default RadialBarChart