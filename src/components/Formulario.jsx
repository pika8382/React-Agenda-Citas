import React , {Fragment, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({agregarCita}) => {

    //Creo State pra el formulario
    const[cita,asignarCita] = useState({
        nomPaciente:'',
        apePaciente:'',
        edadPaciente:'',
        fecha:'',
        hora:'',
        descripcion:''
    });

    const [error,agregarError] = useState(false);

    //Funcion para cambios en onCHange
    
    const handleChange = e =>{
        asignarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const {nomPaciente,apePaciente,edadPaciente,fecha,hora,descripcion} =cita;

    const enviarForm = e =>{
      e.preventDefault();

      //validar

      if(nomPaciente === '' || apePaciente === '' || edadPaciente === '' || fecha === '' || hora === '' || descripcion === ''){
        agregarError(true);
        return;
      }

      agregarError(false);

      //Asignar key
      cita.id = uuidv4();

      //crear cita
      agregarCita(cita);

      //reiniciar form
      asignarCita({
        nomPaciente:'',
        apePaciente:'',
        edadPaciente:'',
        fecha:'',
        hora:'',
        descripcion:''
      })

    }


    return ( 
    <Fragment>
        <h2>Agendar Cita</h2>
          {error ? <p className='alerta-error'>Debes llenar todos los campos</p>
          :null}
        <form onSubmit={enviarForm}>
            <label>Nombre Paciente</label>
            <input 
              className='u-full-width'
              type='text'
              name='nomPaciente'
              placeholder='Nombre del Paciente'
              onChange={handleChange}
              value = {nomPaciente}
            />
            <label>Apellidos Paciente</label>
            <input 
              className='u-full-width'
              type='text'
              name='apePaciente'
              placeholder='Apellidos del Paciente'
              onChange={handleChange}
              value = {apePaciente}
            />
            <label>Edad Paciente</label>
            <input 
              className='u-full-width'
              type='text'
              name='edadPaciente'
              placeholder='Edad del Paciente'
              onChange={handleChange}
              value = {edadPaciente}
            />
            <label>Fecha de la cita</label>
            <input 
              className='u-full-width'
              type='date'
              name='fecha'
              onChange={handleChange}
              value = {fecha}
            />
            <label>Hora de la cita</label>
            <input 
              className='u-full-width'
              type='time'
              name='hora'
              onChange={handleChange}
              value = {hora}
            />
            <label>Descripcion Sintomas</label>
            <textarea 
              className='u-full-width'
              name='descripcion'
              onChange={handleChange}  
              value = {descripcion}
            ></textarea>
            <button
              className='u-full-width button-primary'
            >Solicitar Cita</button>
            
        </form>
    </Fragment>    

     );
}

Formulario.propTypes={
  agregarCita: PropTypes.func.isRequired
}


 
export default Formulario;