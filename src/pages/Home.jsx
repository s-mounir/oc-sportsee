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

function Home() {
    const FirstName = 'Thomas';

    return (
        <Body>
            <div>
                <h1>Bonjour <span>{FirstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div>
                <BarChart />
                <LineChart />
                <RadarChart />
                <RadialBarChart />
                <InfoCard label='Calories'/>
                <InfoCard label='Proteines'/>
                <InfoCard label='Glucides'/>
                <InfoCard label='Lipides'/>
            </div>
        </Body>
    );
  }
  
  export default Home