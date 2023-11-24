import styled from 'styled-components';
import * as d3 from "d3";

const RadialBarChartDiv = styled.div`
  grid-area: 3 / 3 / 5 / 4;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadialBarChart() {
  //http://localhost:3000/user/12
  const dataset = {"data":{"id":12,"userInfos":{"firstName":"Karl","lastName":"Dovineau","age":31},"todayScore":0.12,"keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}}}
  const width = 250;
  const height = 250;

  const data = dataset.data.todayScore;
  const center = {x:width/2, y:height/2};
  const r = 80;
  const offset = Math.PI;
  const scale = d3.scaleLinear()
    .domain([0,1])
    .range([2*Math.PI,0]);

  const point = {
      x: center.x + ( r * Math.sin( offset - scale(data))),
      y: center.y + ( r * Math.cos( offset - scale(data)))
    };
  const path="M 125 45 A 80 80 0 0 0 ".concat(point.x," ",point.y)

    return (
      <RadialBarChartDiv>
        <svg width={width} height={height}>
          <text x="32" y="40" fontFamily='Roboto' fontWeight='500' fontSize='15px' fill='#20253A'>Score</text>
          <circle cx={width/2} cy={height/2} r="80" fill="#FFFFFF"/>
          <text x="100" y="120" fontFamily='Roboto' fontWeight='500' fontSize='26px' fill='#282D30'>{data*100 + "%"}</text>
          <text x="90" y="140" fontFamily='Roboto' fontWeight='500' fontSize='18px' fill='#74798C'>de votre</text>
          <text x="92" y="160" fontFamily='Roboto' fontWeight='500' fontSize='18px' fill='#74798C'>objectif</text>
          <g>
            <path d={path} fill="none" stroke="#FF0000" strokeWidth="10"></path>
            <circle cx={width/2} cy={height/2 - 80} r="5" fill="#FF0000"/>
            <circle cx={point.x} cy={point.y} r="5" fill="#FF0000"/>
          </g>
        </svg>
      </RadialBarChartDiv>
    );
  }
  
  export default RadialBarChart