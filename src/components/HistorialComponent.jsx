
const HistorialComponent = ({lista, texto}) => {

    return(
        <div className="recordatorio">
                <h3>Seleccion anterior: {texto}</h3>
                <h4>Historial de opciones elegidas: </h4>
                    <ul>
                        {lista.map(anterior => <li>{anterior}</li>)}
                    </ul>
        </div>
    )
    
}



export default HistorialComponent;