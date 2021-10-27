import "./chart.css"
/*eslint-disable */
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bc"  interval={'preserveStartEnd'} />
            <Line dataKey="Kelembaban"
                        stroke="green" activeDot={{ r: 8 }} />
             <Line dataKey="WaterPh"
                        stroke="black" activeDot={{ r: 8 }} />    
            <Line dataKey="WaterEC"
                        stroke="Red" activeDot={{ r: 8 }} />    
            <Line type="monotone" dataKey={dataKey} stroke="#5550bc"/>
            <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
