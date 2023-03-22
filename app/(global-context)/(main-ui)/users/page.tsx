'use client'

import HoverMsg from '@/components/HoverMsg/HoverMsg'
import MyBlock from '@/components/MyBlock/MyBlock'
import NewButton from '@/components/NewButton/NewButton'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import { appContext } from '@/context/AppContenxt'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEdit, faInfoCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import DeleteUser from './components/DeleteUser/DeleteUser'
import EditUser from './components/EditUser/EditUser'
import ListUser from './components/ListUser/ListUser'
import NewUser from './components/NewUser/NewUser'
import NewUserLite from './components/NewUserLite/NewUserLite'
import UserInfo from './components/UserInfo/UserInfo'

const columns =
[
  {
    name:'DNI',
    selector: (row:any) => row.dni,
  },
  {
    name:'Correo',
    selector: (row:any) => row.email,
  },
  {
    name:'Usuario',
    selector:(row:any)=><img src={row.user} className="w-[3rem] h-[3rem] rounded-[100%] block" />,
  },
  {
    name:'Nombre',
    selector: (row:any) => row.nombre,
  },
  {
    name:'Telefono',
    selector: (row:any) => row.telefono,
  },
  {
    name:'Categoria',
    selector: (row:any) => row.categoria,
  },
  {
    name:'Fecha',
    selector: (row:any) => row.fecha,
  },
  {
    name:'Opciones',
    cell:(row:any)=><Options user={row}/>
  }
]

const data =
[
  {
    dni:'7777777',
    email:'fdfdfd',
    nombre:'leeel',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'777777547',
    email:'fdfdfd',
    nombre:'leeel',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'7777777',
    email:'si',
    nombre:'leeel',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'7777777',
    email:'fdfdfd',
    nombre:'juan',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'7777777',
    email:'fdfdfd',
    nombre:'jose',
    telefono:'555555555',
    categoria:'PROF',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  }
]

export default function Page() 
{
  const[myFilter,setMyFilter]=useState({value:'',property:''})
  const{setShowPopup}=useContext(appContext)

  return (
    <MyBlock title="usuarios">
      <div className='flex flex-col'>
        <div className='flex gap-[1rem] mb-[1rem]'>
          <NewButton label='Registro Completo' onClick={()=>setShowPopup({show:true,popup:<NewUser/>})}  />
          <NewButton label='Registro Corto' onClick={()=>setShowPopup({show:true,popup:<NewUserLite/>})} />
        </div>
        <TheDataTable
          columns={columns}
          data={data}
          myFilter={myFilter}
          buttons={<MyFilters setMyFilter={setMyFilter} />}
        />
      </div>
    </MyBlock>
  );
}

function MyFilters({setMyFilter}:{setMyFilter:Dispatch<SetStateAction<{ value: string; property: string; }>>})
{

  return(
    <div className='flex'>
      <select
       className='border-[1px] border-myBorderDark outline-none focus:border-primary focus:text-primary px-[1rem] hover:cursor-pointer'
       onChange={(e)=>setMyFilter({value:e.target.value,property:'categoria'})}
       >
        <option value="">Categoria</option>
        <option value="PROF">PROF</option>
      </select>
    </div>
  )
}

function Options({user}:{user:any})
{
  const{setShowPopup}=useContext(appContext)

  return(
    <div className='flex max-w-[100%] flex-wrap gap-[.5rem]'>
      <Option icon={faInfoCircle} onClick={()=>setShowPopup({show:true,popup:<UserInfo {...user}/>})} label={'informacion'} />
      <Option icon={faEdit} onClick={()=>setShowPopup({show:true,popup:<EditUser {...user} />})} label={`editar`} />
      <Option icon={faTrashCan} onClick={()=>setShowPopup({show:true,popup:<DeleteUser {...user} />})} label={`eliminar`} />
      <Option icon={faBars} onClick={()=>setShowPopup({show:true,popup:<ListUser/>})} label={`Lista`} />
    </div>
  )
}

function Option({icon,onClick,styles,label}:{icon:IconProp,onClick:()=>void,styles?:string,label?:string})
{
  const[isHover,setIsHover]=useState<boolean>(false) 

  return (
    <button
      className={`text-myBorderDark relative hover:text-[#78797a] transition-all duration-200 text-[1rem] ${styles}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <HoverMsg
        label={label}
        isHover={isHover}
        initial={"translate-y-[-60%] opacity-0"}
        active={"translate-y-[-100%] opacity-1"}
        styles={"top-0 translate-x-[-50%] left-[50%]"}
      />
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
