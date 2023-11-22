import styled from 'styled-components';
import * as d3 from "d3";


const LineChartDiv = styled.div`
  grid-area: 3 / 1 / 5 / 2; 
  background: #FF0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

const LineChartTitle = styled.p`
  color: #FFFFFF;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px; 
  opacity: 0.5;
  margin-top: 30px;
  margin-left: 30px;
`

function LineChart() {
  const dataset = [{jour:1,poids:69.6,calories:310},
    {jour:2,poids:70,calories:320},
    {jour:3,poids:69.9,calories:330},
    {jour:4,poids:69.8,calories:340},
    {jour:5,poids:69.7,calories:350},
    {jour:6,poids:69.6,calories:360},
    {jour:7,poids:69.5,calories:370},
    {jour:8,poids:69.4,calories:380},
    {jour:9,poids:69.3,calories:390},
    {jour:10,poids:69.2,calories:400}];

  const width = 258;
  const height = 145;
  const marginTop = 5;
  const marginRight = 0;
  const marginBottom = 10;
  const marginLeft = 0;
  const barWidth = (width - marginRight - marginLeft) / dataset.length;

  const yPoids = d3.scaleLinear()
    .domain([69,71]) //d3.max(d3.max(dataset,(d) => d.poids))
    .range([0,height-marginTop-marginBottom])
  const line = d3.line()
                  .x((d,i) => barWidth * i)
                  .y((d) => yPoids(d.poids))
                  .curve(d3.curveCatmullRom.alpha(0.5));

    return (
      <LineChartDiv>
        <LineChartTitle>Durée moyenne des sessions</LineChartTitle>
        <svg>
        <path fill="none" stroke="#FFFFFF" stroke-width="1.5" d={line(dataset)} />
        </svg>
      </LineChartDiv>
    );
  }
  
  export default LineChart
