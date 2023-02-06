import { useEffect, useState } from "react"

export const App = () => {
    const ubicaciones = [
        'src/images/foco_apagado.webp',
        'src/images/foco_prendido.webp',
    ]
    const btnClases = [
        'btn-danger',
        'btn-primary',
    ]

    const [estaPrendido, setEstaPrendido] = useState(false)
    const [clicks, setClicks] = useState(0)

    const onClick = () => {
        setEstaPrendido(!estaPrendido)
        setClicks(clicks + 1)
    }

    const mostrarMensaje = () => `Usted ha hecho ${clicks} en esta aplicación`

    useEffect(() => {
        console.log(mostrarMensaje())
    }, [clicks])

    return (
        <div className="container">
            <div className="min-vh-100 row justify-content-center align-items-center" >
                <div className="col-lg-4 col-9">
                    <div className="card border-0 shadow-lg mb-3 d-flex flex-column gap-3">
                        <h4 className="card-header text-center bg-white border-bottom">
                            Focos
                        </h4>
                        <img
                            src={estaPrendido ? ubicaciones[0] : ubicaciones[1]} 
                            alt="foco_apagado" 
                            className="card-img-top"
                        />

                        <button 
                            className={`btn ${estaPrendido ? btnClases[0] : btnClases[1]} p-3`}
                            onClick={onClick}
                        >
                            Prender/Apagar
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

