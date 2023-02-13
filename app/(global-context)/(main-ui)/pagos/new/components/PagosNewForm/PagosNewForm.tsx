'use client'

import React, { useState } from 'react'
import { Field, Formik } from 'formik';
import UpperForm from './components/UpperForm/UpperForm';
import PagosCertificados from './components/PagosCertificados/PagosCertificados';
import Cuotas from './components/Cuotas/Cuotas';
import BottomForm from './components/BottomForm/BottomForm';

interface values
{
  isOk:boolean;
  setIsOk:React.Dispatch<React.SetStateAction<boolean>>
}

export const pagosNewFormContext = React.createContext<values>({isOk:false,setIsOk:()=>null})

export default function PagosNewForm() 
{
  const[isOk,setIsOk]=useState<boolean>(false)

  const values:values=
  {
    isOk,
    setIsOk
  }

  return (
    <pagosNewFormContext.Provider
     value={values}
     >
      <Formik
        initialValues={{
          nDeOperacion: "",
          codigo: "",
          alumno: "",
        }}
        validate={(values) => {
          console.log(values);
        }}
        onSubmit={(values) => {
          null;
        }}
      >
        <>
          <UpperForm />
          <PagosCertificados />
          <Cuotas />
          <BottomForm />
        </>
      </Formik>
    </pagosNewFormContext.Provider>
  );
}




