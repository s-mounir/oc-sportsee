import styled from 'styled-components';

const RedDiv = styled.div`
height: 100%;
background: rgba(0,0,0,0.1);
position: absolute;
top: 0;
`

const TooltipDiv = styled.div`
width: 39px;
height: 25px;
background: #FFFFFF;
position: absolute;
left: 5px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 8px;
text-align: center;
color: #000000;
`

const CircleExt = styled.div`
width: 8px;
height: 8px;
background: rgba(255,255,255,0.3);
border-radius: 8px;
padding: 4px;
margin-left: -13px;
margin-top: 15px;
`

const CircleInt = styled.div`
width: 8px;
height: 8px;
background: #FFFFFF;
border-radius: 4px;
`

export function LineChartTooltip(props) {
    if (!props.interactionData) {
      return null;
    }
  
    const { xPos, yPos, session } = props.interactionData;
    const divStyle = {left: xPos, width: 'calc(100% - '+xPos+'px)'}
    
    return (
        <RedDiv 
            style={divStyle}>
            <TooltipDiv
        style={{
          top: yPos - 40
        }}>
        <p>{session} min</p>
        <CircleExt>
            <CircleInt></CircleInt>
        </CircleExt>
      </TooltipDiv>
        </RedDiv>
      
    );
  };