'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse,faFolder,faChartPie,faDollar, faPaperPlane, faRotateRight, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavbarUltimate() 
{
  const path = usePathname()
  
  return (
    <nav className="text-myWhite">
      <div className="w-[152px] px-[44px] box-content mb-[4.5rem]">
        <img src="/img/logo-veritcal.png" className="w-[100%]" alt="" />
      </div>
      <ul className='flex flex-col gap-[2rem]'>
        <NavbarOption href={"/"} label={'dashboard'} icon={faHouse} pathname={path} isHome={true} />
        <NavbarOption href={"/prospectos"} label={'prospectos'} icon={faFolder} pathname={path} />
        <NavbarOption href={"/certificados"} label={'certificados'} icon={faChartPie} pathname={path} />
        <NavbarOption href={"/pagos"} label={'pagos'} icon={faDollar} pathname={path} />
        <NavbarOption href={"/envios"} label={'envios'} icon={faPaperPlane} pathname={path} />
        <NavbarOption href={"/pendientes"} label={'pendientes'} icon={faRotateRight} pathname={path} />
        <NavbarOption href={"/usuarios"} label={'usuarios'} icon={faUser} pathname={path} />
        <NavbarOption href={"/email"} label={'email'} icon={faEnvelope} pathname={path} />
      </ul>
    </nav>
  );
}

interface props
{
  label:string;
  icon:IconProp;
  href:string;
  pathname:string|null;
  isHome?:boolean;
}

function NavbarOption(props:props)
{  
  const
  {
    label,
    icon,
    href,
    pathname,
    isHome=false
  }=props
   
  let isSelect = pathname?.includes(href)

  if(isHome)isSelect=pathname===href

   return(
     <li>
        <Link href={href} className={`nav-option flex relative items-center text-[15px] font-medium pl-[1.3rem] hover:text-myWhite gap-[1.8rem] ${isSelect ? 'text-myWhite':'text-[#7B9CF4]'}`}>
          <div className={`bg-myWhite w-[5px] absolute left-0 h-[100%] navbar-pipe ${isSelect ? 'block' : 'hidden'}`}></div>
          <div className='w-[40px] flex justify-center'>
            <FontAwesomeIcon size='2xl' icon={icon}/>
          </div>
          <span className='capitalize'>{label}</span> 
        </Link>
     </li>
   )
}
