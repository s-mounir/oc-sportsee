import styled from 'styled-components';
import * as d3 from "d3";
import { useState } from "react";

import BarChartTooltip from './BarChartTooltip'

const BarChartDiv = styled.div`
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  grid-area: 1 / 1 / 3 / 4;
  position: relative;
`

function bar(x,y,w,h,r,f) {
  // Flag for sweep:
  if(f === undefined) f = 1;
  // x coordinates of top of arcs
  var x0 = x+r;
  var x1 = x+w-r;
  // y coordinates of bottom of arcs
  var y0 = y-h+r;

  // assemble path:
  var parts = [
    "M",x,y,               // step 1
    "L",x,y0,              // step 2
    "A",r,r,0,0,f,x0,y-h,  // step 3
    "L",x1,y-h,            // step 4
    "A",r,r,0,0,f,x+w,y0,  // step 5
    "L",x+w,y,             // step 6
    "Z"                    // step 7
   ];
  return parts.join(" ");
}

function BarChart(props) {
  const dataset = props.data;

  const height = 253;
  const marginTop = 70;
  const marginRight = 90;
  const marginBottom = 50;
  const marginLeft = 40;

  const width = props.width<marginRight+marginLeft ? marginRight+marginLeft : props.width; 
  const barWidth = (width - marginRight - marginLeft) / dataset.length;

  const [hovered, setHovered] = useState(null);
  console.log(hovered);

  const yPoids = d3.scaleLinear()
    .domain([d3.min(dataset,(d) => d.kilogram)-1,d3.max(dataset,(d) => d.kilogram)+1])
    .range([height-marginBottom,marginTop])
  const yCalories = d3.scaleLinear()
    .domain([d3.min(dataset,(d) => d.calories)-50,d3.max(dataset,(d) => d.calories)+50])
    .range([height-marginBottom,marginTop])

  const poidsMin = d3.min(dataset,(d) => d.kilogram)-1;
  const poidsMax = d3.max(dataset,(d) => d.kilogram)+1;
  const poidsMed = poidsMin + (poidsMax-poidsMin)/2;

  function mouseover(evt,d,i){
    evt.target.setAttribute('opacity', '0.5');
    setHovered({
      xPos: marginLeft + barWidth * (i+1) + 10,
      yPos: 50,
      kilogram: d.kilogram,
      calories: d.calories,
    })
  }
  function mouseout(evt){
    evt.target.setAttribute('opacity', '0')
    setHovered(null);
  }

  return (
    <BarChartDiv>
    <svg width="100%" height={height}>
      <text x="32" y="40" fontFamily='Roboto' fontWeight='500' fontSize='15px' fill='#20253A'>Activité quotidienne</text>
      <g  transform={"translate("+ (width-303) +" 25)"}>
        <circle cx="5" cy="11" r="4" fill="#282D30"/>
        <text x="15" y="15" fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>Poids (kg)</text>
        <circle cx="100" cy="11" r="4" fill="#E60000"/>
        <text x="110" y="15" fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>Calories brûlées (kCal)</text>
      </g>
      <g>
        <line x1={marginLeft} y1={yPoids(poidsMin)} x2={width - marginRight} y2={yPoids(poidsMin)} stroke="#DEDEDE" />
        <line x1={marginLeft} y1={yPoids(poidsMed)} x2={width - marginRight} y2={yPoids(poidsMed)} stroke="#DEDEDE" strokeDasharray="4"/>
        <line x1={marginLeft} y1={yPoids(poidsMax)} x2={width - marginRight} y2={yPoids(poidsMax)} stroke="#DEDEDE" strokeDasharray="4"/>
        <text x={width - marginRight + 20} y={yPoids(poidsMax) + 4} fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>{poidsMax}</text>
        <text x={width - marginRight + 20} y={yPoids(poidsMed) + 4} fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>{poidsMed}</text>
        <text x={width - marginRight + 20} y={yPoids(poidsMin) + 4} fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>{poidsMin}</text>
      </g>
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
      <g transform={"translate("+marginLeft+" 0)"}>
        {dataset.map((d,i) => (<path key={"poids"+i} 
                                      d={bar((barWidth * i) + (barWidth)/2 - 10
                                        ,height-marginBottom
                                        ,7
                                        ,height-marginBottom - yPoids(d.kilogram)
                                        ,3
                                        ,1)}
                                      fill="#282D30"/>))} 
      </g>
      <g transform={"translate("+marginLeft+" 0)"}>
        {dataset.map((d,i) => (<path key={"calories"+i} 
                                      d={bar((barWidth * i) + (barWidth)/2 + 3
                                        ,height-marginBottom
                                        ,7
                                        ,height-marginBottom - yCalories(d.calories)
                                        ,3
                                        ,1)}
                                      fill="#E60000"/>))} 
      </g>
      <g transform={"translate("+marginLeft+" "+(height-marginBottom)+")"}>
        {dataset.map((d,i) => (<text  key={"jour"+i} 
                                      x={(barWidth * i) + (barWidth)/2} 
                                      y="20" 
                                      fontFamily='Roboto' 
                                      fontWeight='500' 
                                      fontSize='14px' 
                                      fill='#9B9EAC'
                                      textAnchor='middle'
                                >{d.day}</text>))}
      </g>
    </svg>
    <div>
      <BarChartTooltip interactionData={hovered}/>
    </div>
    </BarChartDiv>
  )
}

export default BarChart;