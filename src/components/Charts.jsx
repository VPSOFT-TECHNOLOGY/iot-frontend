import { BarChart, CartesianGrid, XAxis, YAxis,Tooltip,Legend,Bar } from 'recharts'

const Charts = () => { 
    const data = [
        {name: 'Lunes', Intrusiones: 100, amt: 2400},
        {name: 'Martes', Intrusiones: 100, amt: 2400},
        {name: 'Miercoles', Intrusiones: 50, amt: 2400},
        {name: 'Jueves', Intrusiones: 10, amt: 2400},
        {name: 'Viernes', Intrusiones: 50, amt: 2400},
        {name: 'Sabado', Intrusiones: 300, amt: 2400},
        {name: 'Domingo', Intrusiones: 220, amt: 2400},
    ]
    return (
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Intrusiones" fill="#82ca9d" />
        </BarChart>
            )
}
export default Charts