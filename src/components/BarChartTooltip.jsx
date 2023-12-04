import styled from 'styled-components';

const TooltipDiv = styled.div`
width: 39px;
height: 63px;
background: #E60000;
position: absolute;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 7px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
`

function BarChartTooltip(props) {
    if (!props.interactionData) {
      return null;
    }
  
    const { xPos, yPos, kilogram, calories } = props.interactionData;

    return (
      <TooltipDiv
        style={{
          left: xPos,
          top: yPos,
        }}
      >
        <p>{kilogram}kg</p>
        <p>{calories}Kcal</p>
      </TooltipDiv>
    );
  };

  export default BarChartTooltip