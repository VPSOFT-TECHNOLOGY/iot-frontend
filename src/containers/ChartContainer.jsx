import React from 'react'
import LayoutContent from '../utils/LayoutContent'
import Charts from '../components/Charts'
import { firebaseConfig } from '../api/config'
import {initializeApp} from 'firebase/app'
import { getDatabase ,ref, get, child} from "firebase/database"
import './cards.css'

const ChartContainer = (props) => {

    const app = initializeApp(firebaseConfig)
    const dbref = ref(getDatabase(app))

    const [data, setData] = React.useState()


    React.useEffect(() => {
        get(child(dbref, 'Detecciones')).then(snapshot => {
            const list = snapshot.val()
            const data = []
            for (let id in list) {
                data.push({id,...list[id]})
            }
            setData(data)
        }).catch(error => {
            console.log(error)
        })
    } , [dbref])
 
    console.log(data)

    return(
        <LayoutContent title="Graficas" >
            <>
                <Charts />
                <div className='cards-container'>
                    <h1> Informacion de Detecciones</h1>
                    {data && data.map(item => (
                        <div className='cards-hero' key={item.id}>
                            <p>id: {item.id}</p>
                            <p>Fecha: {item.Fecha}</p>
                            <p>Tipo: {item.Tipo}</p>
                            <p>Valor:{item.Valor}</p>
                        </div>
                    ))}
                </div>
            </>
        </LayoutContent>
    )
}

export default ChartContainer