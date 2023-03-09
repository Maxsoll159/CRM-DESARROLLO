'use client'

import NewButton from '@/components/NewButton/NewButton'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import { appContext } from '@/context/AppContenxt'
import React, { useContext } from 'react'

export default function DeleteUser({nombre}:{nombre:string}) 
{
  return (
    <RegularPopup title={`Eliminar a ${nombre}`} content={<MyMsg/>} />
  )
}

function MyMsg()
{
  const{setShowPopup}=useContext(appContext)

    return(
        <>
          <strong className='block text-center text-[1.5rem] mb-[1rem]'>
            ¿Estas seguro de elimar a este usuario?
          </strong>
          <div className='flex w-[100%] justify-center gap-[1rem]'>
            <NewButton label='SI' />
            <button className='hover:underline hover:text-primary text-myText'
             onClick={()=>setShowPopup(prev=>{return{...prev,show:false}})}
             >
                Regresar
            </button>
          </div>
        </>
    )
}
