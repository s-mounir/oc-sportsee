import styled from 'styled-components'

const RadialBarChartDiv = styled.div`
  grid-area: 3 / 3 / 5 / 4;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadialBarChart() {
    return (
      <RadialBarChartDiv></RadialBarChartDiv>
    );
  }
  
  export default RadialBarChart