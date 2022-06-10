import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

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

function Chart() {
    const { coinId } = useOutletContext<IChartProps>();
    const { isLoading, data } = useQuery<IHistoricalData[]>(
        ["ohlcv", coinId], () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        }
    );
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
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
                />
            )}
        </div>
    )
}

export default Chart;