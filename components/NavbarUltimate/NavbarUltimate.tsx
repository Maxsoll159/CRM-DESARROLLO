import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse,faFolder,faChartPie,faDollar, faPaperPlane, faRotateRight, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

export default function NavbarUltimate() {
  return (
    <nav className="text-myWhite">
      <div className="w-[152px] px-[44px] box-content mb-[4.5rem]">
        <img src="/img/logo-veritcal.png" className="w-[100%]" alt="" />
      </div>
      <ul className='flex flex-col gap-[2rem]'>
        <NavbarOption href={"/"} label={'dashboard'} icon={faHouse}/>
        <NavbarOption href={"/prospectos"} label={'prospectos'} icon={faFolder}/>
        <NavbarOption href={"/certificados"} label={'certificados'} icon={faChartPie}/>
        <NavbarOption href={"/pagos"} label={'pagos'} icon={faDollar}/>
        <NavbarOption href={"/envios"} label={'envios'} icon={faPaperPlane}/>
        <NavbarOption href={"/pendientes"} label={'pendientes'} icon={faRotateRight}/>
        <NavbarOption href={"/usuarios"} label={'usuarios'} icon={faUser}/>
        <NavbarOption href={"/email"} label={'email'} icon={faEnvelope}/>
      </ul>
    </nav>
  );
}

interface props
{
  label:string;
  icon:IconProp;
  href:string
}

function NavbarOption({label,icon,href}:props)
{
   return(
     <li>
        <Link href={href} className='nav-option flex relative items-center text-[15px] font-medium pl-[1.3rem] text-[#7B9CF4] hover:text-myWhite gap-[1.8rem]'>
          <div className='bg-myWhite w-[5px] absolute left-0 h-[100%] navbar-pipe hidden'></div>
          <div className='w-[40px] flex justify-center'>
            <FontAwesomeIcon size='2xl' icon={icon}/>
          </div>
          <span className='capitalize'>{label}</span> 
        </Link>
     </li>
   )
}
