import styled from 'styled-components';
import * as d3 from "d3";

const BarChartDiv = styled.div`
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  grid-area: 1 / 1 / 3 / 4;
`

function BarChart() {
  //http://localhost:3000/user/12/activity
  //{"data":{"userId":12,"sessions":[{"day":"2020-07-01","kilogram":80,"calories":240},{"day":"2020-07-02","kilogram":80,"calories":220},{"day":"2020-07-03","kilogram":81,"calories":280},{"day":"2020-07-04","kilogram":81,"calories":290},{"day":"2020-07-05","kilogram":80,"calories":160},{"day":"2020-07-06","kilogram":78,"calories":162},{"day":"2020-07-07","kilogram":76,"calories":390}]}}
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

  const width = 600;
  const height = 230;
  const marginTop = 70;
  const marginRight = 90;
  const marginBottom = 50;
  const marginLeft = 40;

  const barWidth = (width - marginRight - marginLeft) / dataset.length;

  const yPoids = d3.scaleLinear()
    .domain([69,71]) //d3.max(d3.max(dataset,(d) => d.poids))
    .range([height-marginBottom,marginTop])
  const yCalories = d3.scaleLinear()
    .domain([250,450]) //d3.max(d3.max(dataset,(d) => d.calories))
    .range([height-marginBottom,marginTop])

  return (
    <BarChartDiv>
    <svg width={width} height={height}>
      <text x="32" y="40" fontFamily='Roboto' fontWeight='500' fontSize='15px' fill='#20253A'>Activité quotidienne</text>
      <g  transform={"translate("+ (width-303) +" 25)"}>
        <circle cx="5" cy="11" r="4" fill="#282D30"/>
        <text x="15" y="15" fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>Poids (kg)</text>
        <circle cx="100" cy="11" r="4" fill="#E60000"/>
        <text x="110" y="15" fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>Calories brûlées (kCal)</text>
      </g>
      <g>
        <line x1={marginLeft} y1={yPoids(69)} x2={width - marginRight} y2={yPoids(69)} stroke="#DEDEDE" />
        <line x1={marginLeft} y1={yPoids(70)} x2={width - marginRight} y2={yPoids(70)} stroke="#DEDEDE" strokeDasharray="4"/>
        <line x1={marginLeft} y1={yPoids(71)} x2={width - marginRight} y2={yPoids(71)} stroke="#DEDEDE" strokeDasharray="4"/>
        <text x={width - marginRight + 20} y={yPoids(71) + 4} fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>71</text>
        <text x={width - marginRight + 20} y={yPoids(70) + 4} fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>70</text>
        <text x={width - marginRight + 20} y={yPoids(69) + 4} fontFamily='Roboto' fontWeight='500' fontSize='14px' fill='#74798C'>69</text>
      </g>
      <g transform={"translate("+marginLeft+" "+marginTop+")"}>
        {dataset.map((d,i) => (<rect  key={"mouseover"+i} 
                                      x={barWidth * i} 
                                      y="0" 
                                      width={barWidth} 
                                      height={height-marginBottom-marginTop}
                                      fill="#C4C4C4" 
                                      opacity="0" 
                                      onMouseOver={function(evt){evt.target.setAttribute('opacity', '0.5');}}
                                      onMouseOut={function(evt){evt.target.setAttribute('opacity', '0');}} />))}
      </g>
      <g transform={"translate("+marginLeft+" 0)"}>
        {dataset.map((d,i) => (<rect  key={"poids"+i} 
                                      x={(barWidth * i) + (barWidth)/2 - 10} 
                                      y={yPoids(d.poids)} 
                                      width="7"
                                      height={height-marginBottom - yPoids(d.poids)} 
                                      fill="#282D30"
                                      rx="3" />))}
      </g>
      <g transform={"translate("+marginLeft+" 0)"}>
        {dataset.map((d,i) => (<rect  key={"calories"+i} 
                                      x={(barWidth * i) + (barWidth)/2 + 3} 
                                      y={yCalories(d.calories)} 
                                      width="7"
                                      height={height-marginBottom - yCalories(d.calories)} 
                                      fill="#E60000"
                                      rx="3" />))}
      </g>
      <g transform={"translate("+marginLeft+" 200)"}>
        {dataset.map((d,i) => (<text  key={"jour"+i} 
                                      x={(barWidth * i) + (barWidth)/2} 
                                      y="0" 
                                      fontFamily='Roboto' 
                                      fontWeight='500' 
                                      fontSize='14px' 
                                      fill='#9B9EAC'
                                      textAnchor='middle'
                                >{d.jour}</text>))}
      </g>
    </svg>
    </BarChartDiv>
  )
}

export default BarChart;