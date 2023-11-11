import styled from 'styled-components'

import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import RadarChart from '../components/RadarChart';
import RadialBarChart from '../components/RadialBarChart';
import InfoCard from '../components/InfoCard';

const Body = styled.div`
    position: absolute;
    top: 130px;
    left: 200px;
`

const Bonjour = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: #000000;
    margin: 0;
`

const FNSpan = styled.span`
    color: #FF0101;
`

const HeaderText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
`

const Dashboard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`
  
const DashboardCards = styled.div`
    grid-area: 1 / 4 / 5 / 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

function Home() {
    const FirstName = 'Thomas';

    return (
        <Body>
            <div>
                <Bonjour>Bonjour <FNSpan>{FirstName}</FNSpan></Bonjour>
                <HeaderText>Félicitation ! Vous avez explosé vos objectifs hier 👏</HeaderText>
            </div>
            <Dashboard>
                <BarChart />
                <LineChart />
                <RadarChart />
                <RadialBarChart />
                <DashboardCards>
                    <InfoCard label='Calories'/>
                    <InfoCard label='Proteines'/>
                    <InfoCard label='Glucides'/>
                    <InfoCard label='Lipides'/>
                </DashboardCards> 
            </Dashboard>
        </Body>
    );
  }
  
  export default Home