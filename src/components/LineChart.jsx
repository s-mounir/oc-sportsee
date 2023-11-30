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

function LineChart(props) {
  const dataset = props.data.sessions;

  const getWidth = props.width;
  const width = getWidth<50 ? 50 : getWidth;
  const height = 145;
  const marginTop = 5;
  const marginRight = 0;
  const marginBottom = 10;
  const marginLeft = 0;

  const x = d3.scaleBand()
    .domain(dataset)
    .range([0,width])
  const y = d3.scaleLinear()
    .domain([d3.min(dataset,(d) => d.sessionLength),d3.max(dataset,(d) => d.sessionLength)])
    .range([height-marginBottom,marginTop])

  const line = d3.line()
                  .x((d,i) => x(d))
                  .y((d) => y(d.sessionLength))
                  .curve(d3.curveCatmullRom.alpha(0.5));

    return (
      <LineChartDiv>
        <LineChartTitle>Durée moyenne des sessions</LineChartTitle>
        <svg width={width} height={height}>
          <path fill="none" stroke="#FFFFFF" strokeWidth="1.5" d={line(dataset)} />
        </svg>
      </LineChartDiv>
    );
  }
  
  export default LineChart
