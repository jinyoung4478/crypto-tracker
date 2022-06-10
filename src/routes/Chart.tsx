import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
import ChartButton from "../components/ChartButton";
import { useRecoilValue } from "recoil";
import { chartAtom } from '../atoms';

interface IHistoricalData {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface IChartProps {
    coinId: string;
}

interface IObj {
    x: number;
    y: number[];
}

function Chart() {
    const { coinId } = useOutletContext<IChartProps>();
    const isLineChart = useRecoilValue(chartAtom);
    const { isLoading, data } = useQuery<IHistoricalData[]>(
        ["ohlcv", coinId], () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        }
    );
    const priceData = isLineChart ? data?.map((price) => price.close) as number[] : data?.map((price) => {
        let obj: IObj = {
            x: Date.parse(price.time_close),
            y: [price.open, price.high, price.low, price.close],
        };
        return obj;
    });
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type={isLineChart ? "line" : "candlestick"}
                    series={[
                        {
                            name: "Price",
                            data: priceData!,
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: { show: false, },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        yaxis: { show: false, },
                        xaxis: {
                            axisBorder: { show: false, },
                            axisTicks: { show: false, },
                            labels: { show: false, },
                            type: "datetime",
                            categories: data?.map((price) => price.time_close) as string[],
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#4cd137"],
                                stops: [0, 100],
                            }
                        },
                        colors: ["#e1b12c"],
                        tooltip: {
                            y: { formatter: (value) => `$${value.toFixed(3)}`, }
                        }
                    }}
                />
            )}
            <ChartButton></ChartButton>
        </div>
    )
}

export default Chart;
/* 
<ApexChart
    type="line"
    series={[
        {
            name: "Price",
            data: data?.map((price) => price.close) as number[]
        },
    ]}
    options={{
        theme: {
            mode: "dark",
        },
        chart: {
            height: 300,
            width: 500,
            toolbar: {
                show: false,
            },
            background: "transparent",
        },
        grid: { show: false, },
        stroke: {
            curve: "smooth",
            width: 4,
        },
        yaxis: { show: false, },
        xaxis: {
            axisBorder: { show: false, },
            axisTicks: { show: false, },
            labels: { show: false, },
            type: "datetime",
            categories: data?.map((price) => price.time_close) as string[],
        },
        fill: {
            type: "gradient",
            gradient: {
                gradientToColors: ["#4cd137"],
                stops: [0, 100],
            }
        },
        colors: ["#e1b12c"],
        tooltip: {
            y: { formatter: (value) => `$${value.toFixed(3)}`, }
        }
    }}
/> */