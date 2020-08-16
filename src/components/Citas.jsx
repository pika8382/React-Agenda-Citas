import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

const Citas = ({cita, eliminarCita}) => {
    return ( 
        <Fragment>
            
           <div className ='cita'>
                <p >NOMPRE PACIENTE: <span>{cita.nomPaciente} {cita.apePaciente}</span></p>
                <p >EDAD PACIENTE: <span>{cita.edadPaciente}</span></p>
                <p >FECHA SOLICITADA: <span>{cita.fecha}</span></p>
                <p >HORA: <span>{cita.hora}</span></p>
                <p >DESCRIPCION: <span>{cita.descripcion}</span></p>

                <button 
                    className ='button eliminar u-full-width'
                    onClick ={ () => eliminarCita(cita.id)}
                >Eliminar Cita &times;</button>
           </div>
        </Fragment>
     );
}

Citas.propTypes ={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Citas ;