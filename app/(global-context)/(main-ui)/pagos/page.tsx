'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'

export default function page() 
{

  const columns = [
    {
        name: 'CODIGO',
        selector: (row:any) => row.codigo,
    },
    {
        name: 'FECHA VOUCHER',
        selector: (row:any) => row.date,
    },
    {
        name: 'Nº DEPOSITO',
        selector: (row:any) => row.deposito,
    },
    {
        name: 'MET.PAG',
        selector: (row:any) => row.metPag,
    },
    {
        name: 'PAGO',
        selector: (row:any) => row.pago,
    },
    {
        name: 'PROGRAMA',
        selector: (row:any) => row.programa,
    },
    {
        name: 'DNI/Telefono/Nombre',
        selector: (row:any) => row.email,
    },
  ];
  
  const data = [
    {
        id: 1,
        codigo:'RP8-54',
        date: '24/06/20202322',
        deposito:'12345678998',
        metPag:'inter',
        pago:'S/ 40743',
        programa:'OSCE',
        email:'fdfdf@gmail.com',
    },
    {
        id: 2,
        codigo:'RP8-01232',
        date: '24/06/2020',
        deposito:'12345678998',
        metPag:'SCOTIA43',
        pago:'S/ 43207',
        programa:'OSCE',
        email:'fdfdf@gmail.com',
    },
    {
        id: 3,
        codigo:'RP8-5401',
        date: '24/06/2020',
        deposito:'12345678998',
        metPag:'SCOTIA',
        pago:'S/ 407',
        programa:'OSCE',
        email:'fdfdf@gmail.com',
    },
    {
        id: 4,
        codigo:'RP8-0541',
        date: '24/06/2020',
        deposito:'12345678998',
        metPag:'SCOTIA',
        pago:'S/ 330754',
        programa:'OSCE',
        email:'fdfdf@gmail.com',
    },
  ]
  

  return (
    <MyBlock title='Pagos'>
       <TheDataTable columns={columns} data={data}/>
    </MyBlock>
  )
}
