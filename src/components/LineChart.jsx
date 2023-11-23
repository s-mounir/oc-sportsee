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
  const dataset = [{jour:'L',durée:65},
  {jour:'M',durée:66},
  {jour:'M',durée:67},
  {jour:'J',durée:66},
  {jour:'V',durée:65},
  {jour:'S',durée:66},
  {jour:'D',durée:67}];

  const width = 300;
  const height = 145;
  const marginTop = 5;
  const marginRight = 0;
  const marginBottom = 10;
  const marginLeft = 0;

  const x = d3.scaleBand()
    .domain(dataset) //d3.max(d3.max(dataset,(d) => d.poids))
    .range([0,width])
  const y = d3.scaleLinear()
    .domain([60,70]) //d3.max(d3.max(dataset,(d) => d.poids))
    .range([height-marginBottom,marginTop])
  const line = d3.line()
                  .x((d,i) => x(d))
                  .y((d) => y(d.durée))
                  .curve(d3.curveCatmullRom.alpha(0.5));

    return (
      <LineChartDiv className='lineChartDiv'>
        <LineChartTitle>Durée moyenne des sessions</LineChartTitle>
        <svg>
        <path fill="none" stroke="#FFFFFF" strokeWidth="1.5" d={line(dataset)} />
        </svg>
      </LineChartDiv>
    );
  }
  
  export default LineChart
