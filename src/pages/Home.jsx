import styled, { keyframes } from 'styled-components';
import { useParams } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import { useFetch } from '../utils/hooks';

const Body = styled.div`
    position: absolute;
    top: 91px;
    left: 117px;
    padding: 35px;
    width: calc(100% - 187px);
    height: calc(100% - 161px);
`

const Error = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: #000000;
    margin-left: -230px;
    margin-top: -29px;
`

const LoaderWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  padding: 10px;
  border: 10px solid #FF0101;
  border-bottom-color: transparent;
  border-radius: 100px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

function Home() {
    const { id } = useParams()
    const { isLoading, dataUser, dataActivity, dataSessions, dataPerformance, error, userExist } = useFetch(id)
    
    if(error){
        return <Error>Les données sont indisponible pour le moment</Error>
    }
    if(!userExist){
        return <Error>Cet utilisateur n'existe pas</Error>
    }

    return (
        <Body>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <Dashboard datauser={dataUser} dataperformance={dataPerformance} dataactivity={dataActivity} datasessions={dataSessions}/>
            )}
        </Body>
    );
  }
  
  export default Home