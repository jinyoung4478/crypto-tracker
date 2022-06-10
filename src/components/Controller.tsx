import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { darkAtom } from '../atoms';
import { HiSun } from 'react-icons/hi';
import { IoMoon } from 'react-icons/io5';
import { AiFillHome } from "react-icons/ai"

const Container = styled.div`
position: absolute;
top: 0;
width: 480px;
`;

const BackButton = styled.button`
font-size: 0.8rem;
position: relative;
color: ${(props) => props.theme.textColor};
font-size: 2rem;
top: 10px;
left: 0;
width: 3.5rem;
height: 3.5rem;
background-color: transparent;
border: none;
border-radius: 50%;
cursor: pointer;
&:hover {
    color: ${(props) => props.theme.textColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
`;

const SwitchButton = styled.label`
position: absolute;
left: 80%;
top: 20px;
display: inline-block;
width: 3.8rem;
height: 2rem;
vertical-align: middle;
input {
    display: none;
}
input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(1.6rem);
}
`;

const Slider = styled.span<IProps>`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: ${(props) => props.theme.btnBgColor};
-webkit-transition: 0.4s;
transition: 0.4s;
border-radius: 1rem;
&:before {
    position: absolute;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    left: 0.4rem;
    bottom: 0.25rem;
    background-color: ${(props) => props.theme.btnColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
}
svg:first-child {
    margin-left: 0.6rem;
    margin-bottom: 0.1rem;
    font-size: 1.3rem;
    color: yellow;
  }
  svg:nth-child(2) {
    margin-top: 0.3rem;
    font-size: 1.5rem;
    color: tomato;
  }
`;

interface IProps {
    isDarkMode?: boolean;
}

const Controller = () => {
    const setDarkAtom = useSetRecoilState(darkAtom);
    const toggleSwitch = () => setDarkAtom((prev) => !prev);
    const location = useLocation();
    return (
        <Container>
            {location.pathname === "/" ? (
                null
            ) : (
                <BackButton>
                    <Link to="/">
                        <AiFillHome />
                    </Link>
                </BackButton>
            )}
            <SwitchButton>
                <input type="checkbox" />
                <Slider onClick={toggleSwitch}>
                    <IoMoon />
                    <HiSun />
                </Slider>
            </SwitchButton>
        </Container>
    )
};

export default Controller;