import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        axios.get('https://fathomless-plateau-74593.herokuapp.com/product')
            .then(data => setChartData(data.data)
            )
    }, [])
    return (
        <div className='container'>
            <h1 className='mt-5 mb-5 text-info'>Price and Quantity Chart</h1>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={600}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stackId="1" stroke="#3F87F5" fill="#3F87F5" />
                    <Area type="monotone" dataKey="quantity" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Chart;