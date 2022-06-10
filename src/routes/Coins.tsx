import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import Controller from "../components/Controller";

const Container = styled.div`
padding: 20px;
max-width: 480px;
margin: 0 auto;
`;

const Header = styled.header`
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Title = styled.h1`
font-size: 30px;
text-align: center;
color: ${(props) => props.theme.textColor};
`;

const CoinsList = styled.ul`
`;

const Coin = styled.li`
background-color: ${(props) => props.theme.boxColor};
color: ${(props) => props.theme.bgColor};
font-size: 20px;
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
        font-size: 22px;
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

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)
    return (
        <Container>
            <Helmet>
                <title>JYPTO</title>
            </Helmet>
            <Header>
                <Controller />
                <Title>JYPTO - CRYPTO TRACKER</Title>
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