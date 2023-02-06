import { useEffect, useState } from "react"
import { obtenerDatos } from "./helpers/obtenerDatos"

export const Nosotros = () => {


    const datos = [
        {id: 1, nombre: 'ReactJS'},
        {id: 2, nombre: 'VueJS'},
        {id: 3, nombre: 'AngularJS'},

    ]

    const [equipo, setEquipo] = useState([])

    const modificarEquipo = async () => {
        const newEquipo = await obtenerDatos()
        setEquipo(newEquipo)
        
    }

    useEffect(() => {

        modificarEquipo()
    }, [])


    

    /* 
    cuiado al utilizar useEffect porque puede generar buclues infinitos

    */

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(({id, name, email}) => (
                        <li key={id}>
                            <b>Nombre</b> {name} && <b>email</b> {email}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
