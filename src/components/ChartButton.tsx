import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SwitchButton = styled.label`
position: relative;
display: inline-block;
width: 12rem;
height: 2.5rem;
vertical-align: middle;
input {
    display: none;
}
input:checked + span:before {
    -webkit-transform: translateX(1.6rem);
    -ms-transform: translateX(1.6rem);
    transform: translateX(5.2rem);
}
`;

const Slider = styled.span`
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
display: flex;
justify-content: space-around;
align-items: center;
&:before {
    position: absolute;
    content: "";
    height: 2rem;
    width: 5.8rem;
    left: 0.5rem;
    bottom: 0.25rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 20px;
}
span {
    color: black;
    font-size: 1.3rem;
  }
`;

const ChartButton = () => {
    const toggleSwitch = () => { console.log("hello") }
    return (
        <Container>
            <SwitchButton>
                <input type="checkbox" />
                <Slider onClick={toggleSwitch}>
                    <span>Stick</span>
                    <span>Line</span>
                </Slider>
            </SwitchButton>
        </Container>
    )
};

export default ChartButton;