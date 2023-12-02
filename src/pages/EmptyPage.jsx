import styled from 'styled-components';

const Body = styled.div`
    position: absolute;
    top: 91px;
    left: 117px;
    padding: 35px;
    width: calc(100% - 187px);
    height: calc(100% - 161px);
`

const EmptyDiv = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const EmptyText = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    margin: 0;
    text-align: center;
`

function EmptyPage() {

    return (
        <Body>
            <EmptyDiv>
                <EmptyText>Cette page est en cours de construction</EmptyText>
            </EmptyDiv>
        </Body>
    );
  }
  
  export default EmptyPage