import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup.object({
    nombre: yup.string().required("El campo nombre es obligatorio"),
    correo: yup.string().email("El correo no es válido").required("El campo correo es obligatorio"),
    dni: yup.string().matches(/^[0-9]{8}$/, "El DNI debe contener exactamente 8 números").required("El campo DNI es obligatorio"),
    celular: yup.string().matches(/^9[0-9]{8}$/, "El número de celular debe iniciar con 9 y tener 9 números")
  });
    
const Contactenos = () => {
    const {register, handleSubmit, formState:{errors}}=useForm({resolver: yupResolver(schema)})
    const onValidate =(datos)=>{
      console.log("Se recibieron los datos del formulario", datos);
    }
  return (
    <>
    <br></br>
    <div className="contact-form-container">
    <form onSubmit={handleSubmit(onValidate)}>
        <div>
        <label>Nombre: </label>
        <input type="text" {...register('nombre')} placeholder='Ingrese su nombre'></input>
        <p style={{color:'red'}}> {errors.nombre?.message}</p>
        </div>
        <div>
        <label>Correo: </label>
        <input type="email" {...register('correo')} placeholder='Ingrese su correo'></input>
        <p style={{color:'red'}}> {errors.correo?.message}</p>
        <label>DNI: </label>
        <input type="text" {...register('dni')} placeholder='Ingrese su DNI'></input>
        <p style={{color:'red'}}> {errors.dni?.message}</p>
        <label>Celular: </label>
        <input type="text" {...register('celular')} placeholder='Ingrese su numero de celular'></input>
        <p style={{color:'red'}}> {errors.celular?.message}</p>
        <button type="submit">Enviar</button>
        </div>
    </form>
    </div>
    
    </>
  )
}

export default Contactenos
