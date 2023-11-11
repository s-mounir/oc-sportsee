import styled from 'styled-components'

const BarChartDiv = styled.div`
    width: 835px;
    height: 320px;
    background: #020203;
    grid-area: 1 / 1 / 3 / 4; 
`

function BarChart() {
    return (
      <BarChartDiv>BarChart</BarChartDiv>
    );
  }
  
  export default BarChart