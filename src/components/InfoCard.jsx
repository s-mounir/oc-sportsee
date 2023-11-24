import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  padding: 20px;
  gap: 20px;
`

const Value = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #282D30;
`

const Label = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #74798C;
`

function InfoCard(props) {
  const formatter = new Intl.NumberFormat('en-US')
    const value = formatter.format(props.data)
    const metric = props.label==='Calories'?'kCal':'g';
    
    return (
      <Card>
        {props.children}
        <div>
          <Value>{value+metric}</Value>
          <Label>{props.label}</Label>
        </div>
      </Card>
    );
  }
  
  export default InfoCard