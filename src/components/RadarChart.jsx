import styled from 'styled-components';
import * as d3 from "d3";
import { useRef } from "react";

import { useContainerDimensions } from '../utils/hooks';

const RadarChartDiv = styled.div`
  grid-area: 3 / 2 / 5 / 3;
  background: #282D30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadarChart(props) {
  const dataValue=props.data.data //[{value: 80, kind: 1},{value: 120, kind: 2},{value: 140, kind: 3},{value: 50, kind: 4},{value: 200, kind: 5},{value: 90, kind: 6}]
  const dataLabel=props.data.kind //{1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity'}

  const getWidth = props.width;
  const width = getWidth<50 ? 50 : getWidth;
  const height = 250;
  const marginTop = 10;
  const marginLeft = 55;
  const marginRight = 55;
  const marginBottom = 10;

  const innerWidth = width-marginLeft-marginRight;
  const innerHeight = height-marginTop-marginBottom;
  const numSides = dataValue.length;
  const numLevel = 5;
  const smallerSize = Math.min( innerWidth,innerHeight)
  const maxLength = smallerSize/2;
  const offset = Math.PI;
  const polyangle = (Math.PI * 2)/numSides;
  const center = {x:innerWidth/2, y:innerHeight/2};
  const scale = d3.scaleLinear()
    .domain([0,d3.max(dataValue,(d) => d.value)])
    .range([0,maxLength]);

  function generatePoint({length, angle}) {
    const point = {
      x: center.x + ( length * Math.sin( offset - angle)),
      y: center.y + ( length * Math.cos( offset - angle))
    };
    return point;
  }

  // create 5 hexagons 
  const polygons = [];
  for(let i=1; i<=numLevel; i++){
    let array = "";
    let length = maxLength/numLevel * i;
    for(let vertex=0; vertex < numSides; vertex++){
      const theta = vertex*polyangle;
      const point = generatePoint({length, angle:theta});
      array = array.concat(point.x,",",point.y," ")
    }
    polygons.push(array)
  }

  // create data shape + Labels
  let array = "";
  let labels=[];
  let i = 0;
  for(const d of dataValue){
    //data shape
    const theta = i*polyangle;
    const point = generatePoint({length:scale(d.value), angle:theta});
    array = array.concat(point.x,",",point.y," ")

    //labels
    const labelPoint = generatePoint( { length:( smallerSize / 2  + 7), angle:theta } );
    let textAnchor;
    if([0,3].includes(i)){textAnchor="middle";}
    else if([1,2].includes(i)){textAnchor="start";}
    else{textAnchor="end";}

    const label = {
      name: dataLabel[d.kind],
      x: labelPoint.x,
      y: labelPoint.y,
      textAnchor: textAnchor
    };
    labels.push(label);
    i++;
  }

  return (
    <RadarChartDiv>
      <svg width={width} height={height}>
        <g transform={"translate("+marginLeft+" "+marginTop+")"}>
        {polygons.map((d,i) => (<polygon key={"polygon"+i} points={d} fill="none" stroke="white"/>))}
        <polygon key={"polygonData"} points={array} fill="#FF0101" opacity="70%"/>
        {labels.map((d,i) => (<text key={"label"+i} x={d.x} y={d.y} textAnchor={d.textAnchor} fill="#FFFFFF" fontSize="12px" fontFamily='Roboto'>{d.name}</text>))}
        </g>
      </svg>
    </RadarChartDiv>
    );
  }
  
  export default RadarChart

  
  