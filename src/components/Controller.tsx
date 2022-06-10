import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { darkAtom } from '../atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
position: fixed;
top: 0;
width: 100%;
padding: 20px 0;
`;

const BackButton = styled.button`
font-size: 0.8rem;
position: absolute;
color: white;
left: 20vw;
width: 3.5rem;
height: 3.5rem;
background-color: transparent;
border: none;
border-radius: 50%;
cursor: pointer;
&:hover {
    background-color: black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
`;

const SwitchButton = styled.label`
position: absolute;
left: 70vw;
display: inline-block;
width: 3.4rem;
height: 1.9rem;
vertical-align: middle;
input {
    display: none;
}
input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(1.2rem);
}
`;

const Slider = styled.span<IProps>`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: 0.4s;
transition: 0.4s;
border-radius: 1rem;
&:before {
    position: absolute;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    left: 0.3rem;
    bottom: 0.2rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
}
`;

interface IProps {
    isDarkMode?: boolean;
}

const Controller = () => {
    const setDarkAtom = useSetRecoilState(darkAtom);
    const isDarkMode = useRecoilValue(darkAtom);
    const toggleSwitch = () => setDarkAtom(isDarkMode => !isDarkMode);
    const location = useLocation();
    return (
        <Container>
            {location.pathname === "/" ? null : (
                <BackButton>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouse} size="2x" />
                    </Link>
                </BackButton>
            )}
            <SwitchButton>
                <input type="checkbox" />
                <Slider onClick={toggleSwitch} />
            </SwitchButton>
        </Container>
    )
};

export default Controller;