import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderDiv = styled.header`
    position: absolute;
    width: 100vw;
    height: 91px;
    top: 0px;
    left: 0px;
    right: 0px;

    background: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    margin-left: 30px;
`

const NavT = styled.nav`
    width: 60vw;
    padding-right: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavItem = styled(NavLink)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
    text-decoration: none;
`

function Header(){
    return (
        <HeaderDiv>
            <Logo src="/logoSportSee.png" alt="logo"/>
            <NavT>
                <NavItem to="/" activeclassname="active" >Accueil</NavItem>
                <NavItem to="/profil" activeclassname="active" >Profil</NavItem>
                <NavItem to="/reglage" activeclassname="active" >Réglage</NavItem>
                <NavItem to="/communaute" activeclassname="active" >Communauté</NavItem>
            </NavT>
        </HeaderDiv>
    )
}

export default Header