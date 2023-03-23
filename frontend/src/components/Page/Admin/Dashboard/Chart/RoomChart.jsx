import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(CategoryScale, Tooltip, Legend, LinearScale, BarElement);

const RoomChart = () => {
    return (
        <div className="w-full">
            <Chart
                type="bar"
                data={{
                    labels: ["Users Status"],
                    datasets: [
                        {
                            label: "Online Users",
                            data: [15],
                            backgroundColor: "cornflowerblue",
                            borderColor: "#3333",
                            borderWidth: 2,
                            borderRadius: 2,
                        },
                        {
                            label: "Offline Users",
                            data: [11],
                            backgroundColor: "dimgray",
                            borderColor: "#3333",
                            borderWidth: 2,
                            borderRadius: 2,
                        },
                    ],
                }}
            />
        </div>
    );
};

export default RoomChart;
