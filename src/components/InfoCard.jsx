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
  //http://localhost:3000/user/12
  //{"data":{"id":12,"userInfos":{"firstName":"Karl","lastName":"Dovineau","age":31},"todayScore":0.12,"keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}}}
  const values = [{label: 'Calories', value: '1,930kCal'},
                  {label: 'Proteines', value: '155g'},
                  {label: 'Glucides', value: '290g'},
                  {label: 'Lipides', value: '50g'}]

    const value = values.filter(obj => {return obj.label === props.label})[0].value
    
    return (
      <Card>
        {props.children}
        <div>
          <Value>{value}</Value>
          <Label>{props.label}</Label>
        </div>
      </Card>
    );
  }
  
  export default InfoCard