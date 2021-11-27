import { BarChart, CartesianGrid, XAxis, YAxis,Tooltip,Legend,Bar } from 'recharts'

const Charts = () => { 
    const data = [
        {name: 'Lunes', Intruciones: 100, amt: 2400},
        {name: 'Martes', Intruciones: 100, amt: 2400},
        {name: 'Miercoles', Intruciones: 50, amt: 2400},
        {name: 'Jueves', Intruciones: 10, amt: 2400},
        {name: 'Viernes', Intruciones: 50, amt: 2400},
        {name: 'Sabado', Intruciones: 300, amt: 2400},
        {name: 'Domingo', Intruciones: 300, amt: 2400},
    ]
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Intruciones" fill="#82ca9d" />
        </BarChart>
    )
}
export default Charts