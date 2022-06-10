import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { Overview } from "./Coin";

const PriceInfoContainer = styled(Overview)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const PriceInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 1rem;
div{
    margin: 0.2rem 0;
}
div:first-child{
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
}
`

interface IChartProps {
    priceInfo: {
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_15m: number;
        percent_change_30m: number;
        percent_change_1h: number;
        percent_change_6h: number;
        percent_change_12h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_1y: number;
        ath_price: number;
        ath_date: string;
        percent_from_price_ath: number;
    }
}

function Price() {
    const { priceInfo } = useOutletContext<IChartProps>();
    return (
        <PriceInfoContainer>
            <PriceInfo>
                <div>Market Cap</div>
                <div>{priceInfo?.market_cap}1</div>
            </PriceInfo>
            <PriceInfo>
                <div>Volume (24 hours)</div>
                <div>{priceInfo?.volume_24h.toFixed(3)}</div>
            </PriceInfo>
            <PriceInfo>
                <div>24 hours</div>
                <div>{priceInfo?.percent_change_24h}%</div>
            </PriceInfo>
            <PriceInfo>
                <div>7 days</div>
                <div>{priceInfo?.percent_change_7d}%</div>
            </PriceInfo>
            <PriceInfo>
                <div>1 month</div>
                <div>{priceInfo?.percent_change_30d}%</div>
            </PriceInfo>
            <PriceInfo>
                <div>All time high</div>
                <div>{priceInfo?.ath_price.toFixed(3)}</div>
            </PriceInfo>
        </PriceInfoContainer>
    )
}

export default Price;