import React , {Component} from 'react';
import data from '../data.json'
import HistorialComponent from '../components/HistorialComponent';
import SeleccionComponent from '../components/SeleccionComponent';
import Swal from 'sweetalert2';


class TextoComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            lista: [],
            texto:""
        };
        this.handleClick = this.actualizarEstado;
    }

    componentDidMount(){
        console.log("Se creó el componente")
    
      }

     textoSiguiente(){
        if(this.state.contador === 0){
            return data[0];
        }else{
            let siguiente = `${this.state.contador + 1}${this.state.texto.toLowerCase()}`
            let siguienteHistoria = data.filter(dato => dato.id === siguiente)
            return siguienteHistoria[0]
        }
    }



    actualizarEstado = (e) => {
        let historialArray = this.state.lista;
        if(this.state.contador < 5){
            this.setState({
                contador: this.state.contador + 1,
                lista: historialArray,
                texto: e.target.id
            })
            if(this.state.texto !== "" && this.state.contador < 4){
                historialArray.push(this.state.texto)
            }
        }
    
    }

    render(){

        if(this.state.contador > 4){
            Swal.fire(
                '¡Historia finalizada!',
                '',
                'success'
              )

            let final = `${this.state.contador}${this.state.texto.toLowerCase()}`
            let historiaFinal = data.filter(dato => dato.id === final)
            return (
                <div className='layout'>
                    <h1 className='historia'>{historiaFinal[0].historia}</h1>
                    <SeleccionComponent handleClick={this.handleClick} opcionA={historiaFinal[0].opciones.b} opcionB={historiaFinal[0].opciones.b}/>
                    <HistorialComponent lista={this.state.lista} texto={this.state.texto}/>
                </div>
            )
        }
        
            return (
                
                <div className='layout'>
                    <h1 className='historia'>{this.textoSiguiente().historia}</h1>
                    <SeleccionComponent handleClick={this.handleClick} opcionA={this.textoSiguiente().opciones.a} opcionB={this.textoSiguiente().opciones.b}/>
                    <HistorialComponent lista={this.state.lista} texto={this.state.texto}/>
                </div>
            )
        
    }
    
}

export default TextoComponent;