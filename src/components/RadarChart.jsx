import styled from 'styled-components'

const RadarChartDiv = styled.div`
  grid-area: 3 / 2 / 5 / 3;
  background: #282D30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadarChart() {
    return (
      <RadarChartDiv></RadarChartDiv>
    );
  }
  
  export default RadarChart