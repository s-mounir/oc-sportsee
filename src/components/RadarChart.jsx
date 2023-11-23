import styled from 'styled-components';
import * as d3 from "d3";

const RadarChartDiv = styled.div`
  grid-area: 3 / 2 / 5 / 3;
  background: #282D30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadarChart() {
  const data = [{axis:"Intensité", value: 13},
                {axis:"Vitesse", value: 6},
                {axis:"Force", value: 5},
                {axis:"Endurance", value: 9},
                {axis:"Energie", value: 2},
                {axis:"Cardio", value: 7}];
  
  const numSides = 5;
  const numLevel = 5;
  const size = 230;
  const maxLength = 100;
  const offset = Math.PI;
  const polyangle = (Math.PI * 2)/numSides;
  const r = 0.8*size;
  const r0 = r/2;
  const center = {x:size/2, y:size/2};

  function generatePoint({length, angle}) {
    const point = {
      x: center.x + ( length * Math.sin( offset - angle)),
      y: center.y + ( length * Math.cos( offset - angle))
    };
    return point;
  }

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

  return (
    <RadarChartDiv>
      <svg width={size} height={size}>
        <g> 
        {polygons.map((d,i) => (<polygon key={"polygon"+i} points={d} fill="none" stroke="white"/>))}
        </g>
      </svg>
    </RadarChartDiv>
    );
  }
  
  export default RadarChart

  
  