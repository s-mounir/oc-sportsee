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

const ErrorDiv = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Error404 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 288px;
    color: #FF0101;
    margin: 0;
`

const ErrorText = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    color: #FF0101;
    margin: 0;
    text-align: center;
`

const StyledLink = styled(Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF0101;
    margin: 0;
`

function Error() {

    return (
        <Body>
            <ErrorDiv>
                <Error404>404</Error404>
                <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
                <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
            </ErrorDiv>
        </Body>
    );
  }
  
  export default Error