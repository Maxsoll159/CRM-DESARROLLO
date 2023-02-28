'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import Link from 'next/link'
import React from 'react'

const customStyles=
{
    rows:
    {
        style:
        {
            padding:"5px 0px",
            color:'#272D3B',
            '&:hover':
            {
                backgroundColor:'#CCE5FF',
            }
        }
    }
}

const estadoStyle=
{
  color:'#fff',
  borderRadius:'.3rem',
  display:'flex',
  justifyContent:'center',
  textTransform:'uppercase',
}

export default function page() 
{

  const columns = [
    {
        name: 'ID',
        selector: (row:any) => row.codigo,
    },
    {
        name: 'EDITOR',
        selector: (row:any) => <img src={row.editor} className="block h-[37px] w-[37px] rounded-[100%] object-cover" alt="" />,
    },
    {
        name: 'FECHA DE VOUCHER',
        selector: (row:any) => row.fechaVaucher,
    },
    {
        name: 'MEDIO PAGO',
        selector: (row:any) => row.medioPago,
    },
    {
        name: 'COMPROBANTE',
        selector: (row:any) => row.comprobantePago,
    },
    {
        name: 'ALUMNO',
        selector: (row:any) => row.alumno,
    },
    {
        name: 'PRGRAMA',
        selector: (row:any) => row.programa,
    },
    {
        name: 'HISTORIAL',
        selector: (row:any) => row.historial,
    },
    {
        name: 'ESTADO',
        selector: (row:any) => row.estado,
        conditionalCellStyles:
        [
            {
                when:(row:any)=>row.estado==='pendiente',
                style:{...estadoStyle,backgroundColor:'#FDAB3D'}
            },
            {
                when:(row:any)=>row.estado==='pagado',
                style:{...estadoStyle, backgroundColor:'#4AD69D'}
            }
        ]
    },
  ];
  
  const data = [
    {
        id: 1,
        codigo:'RP8-54',
        editor:'https://static.nationalgeographic.es/files/styles/image_3200/public/01-rat-friends-nationalgeographic_1162144.jpg?w=1900&h=1267',
        fechaVaucher:'fd/fd/fd',
        medioPago:'yape',
        pago:'S/ 40743',
        comprobantePago:'boleta',
        programa:'OSCE',
        alumno:'jose',
        historial:'fdfdf@gmail.com',
        estado:'pagado'
    },
    {
        id: 2,
        codigo:'fdRP8-54',
        editor:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/OK-button_-_Macro_photography_of_a_remote_control.jpg/800px-OK-button_-_Macro_photography_of_a_remote_control.jpg',
        fechaVaucher:'fd/fggd/fd',
        medioPago:'yafdpe',
        pago:'S/ 4073343',
        comprobantePago:'bolfdeta',
        programa:'OSCE',
        alumno:'jose',
        historial:'fdfdf@gmailgg.com',
        estado:"pendiente"
    },
  ]
  

  return (
    <MyBlock title="Pagos">
      <TheDataTable
        columns={columns}
        data={data}
        styles={customStyles}
        buttons={<Link className='px-[1rem] py-[.3rem] rounded-[2rem] bg-[#00CCF2] whitespace-nowrap flex items-center text-myWhite' href={"/pagos/new"}>+ Agregar Nuevo</Link>}
      />
    </MyBlock>
  );
}
