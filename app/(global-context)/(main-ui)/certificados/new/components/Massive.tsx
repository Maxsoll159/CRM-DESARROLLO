'use client'

import { useRouter } from 'next/navigation';
import ExcelUploader from '@/components/ExcelUploader/ExcelUploader';
import React from 'react'

export default function Massive() 
{
  const router = useRouter();   

  return (
    <div className="container mx-auto">
    <div className="w-full px-10">
      <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
        <h1 className="text-gray-400 font-medium text-2xl">
          Crear Certificados Masivamente
        </h1>
        <p className="mt-4 font-normal text-gray-500">
          Puedes importar los certificados cargando un archivo o
          copiandolos y pegandolos desde un archivos.
        </p>
        <div className="flex justify-between mt-10 gap-9 flex-wrap">
          <button
            className="w-full text-black mx-auto xl:w-[48%] lg:w-[48%] border-dashed border-2 border-gray-600 rounded-lg flex justify-center items-center py-40 hover:bg-blue-400 hover:text-white"
            onClick={() =>
              router.push(
                "/dashboard/certificados/crearcertificado/copiarpegar"
              )
            }
          >
            <div className="mx-3">
              <i className="fa-solid fa-file-import fa-3x text-center w-full"></i>
              <p className="font-medium mt-2 text-center">Copiar/pegar</p>
              <p className="mt-2 text-center">
                Copie y pegue los contactos desde su archivo Excel (.xls)
              </p>
            </div>
          </button>
          <ExcelUploader />
        </div>
      </div>
    </div>
  </div>
  )
}
