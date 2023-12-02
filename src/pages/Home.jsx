import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Body = styled.div`
    position: absolute;
    top: 91px;
    left: 117px;
    padding: 35px;
    width: calc(100% - 187px);
    height: calc(100% - 161px);
`

const StyledDiv = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const WelcomeText = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 142.6%;
    margin: 0;
    text-align: center;
`

const ChoosingText = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    margin: 0;
    text-align: center;
`

const StyledLink = styled(Link)`
    background: #FF0101;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    padding: 10px;
    margin: 30px;
    color: #FFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
`

function Home() {

    return (
        <Body>
            <StyledDiv>
                <WelcomeText>Bienvenu sur SportSee</WelcomeText>
                <ChoosingText>Veuillez choisir un utilisateur</ChoosingText>
                <div>
                    <StyledLink to="/user/12">Karl</StyledLink>
                    <StyledLink to="/user/18">Cecilia</StyledLink>
                </div>
            </StyledDiv>
        </Body>
    );
  }
  
  export default Home