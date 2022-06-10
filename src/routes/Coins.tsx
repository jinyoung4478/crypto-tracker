import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import Controller from "../components/Controller";

const Container = styled.div`
padding: 0px 20px;
max-width: 480px;
margin: 0 auto;
`;

const Header = styled.header`
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;

const CoinsList = styled.ul`
`;

const Coin = styled.li`
//background-color: ${(props) => props.theme.textColor};
background-color: ${(props) => props.theme.boxColor};
color: ${(props) => props.theme.bgColor};
font-size: 18px;
border-radius: 15px;
margin-bottom: 10px;
transition: color;
a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
}
&:hover {
    a {
        color: ${((props) => props.theme.accentColor)}
    }
}
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
};

const Title = styled.h1`
font-size: 30px;
text-align: center;
color: ${(props) => props.theme.accentColor};
`;

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)
    return (
        <Container>
            <Helmet>
                <title>JRYPTO</title>
            </Helmet>
            <Header>
                <Controller />
                <Title>100 CRYPTOCURRENCY</Title>
            </Header>
            {isLoading ? (
                <Loader>isLoading...</Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map(coin => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )
            }
        </Container >
    )
}
export default Coins;