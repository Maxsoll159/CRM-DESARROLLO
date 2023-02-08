'use client'

import React,{useState} from 'react'
import NavbarOption from './components/NavbarOption';
import { faHouse,faFolder,faChartPie,faDollar, faPaperPlane, faRotateRight, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function NavbarOptionList() 
{
  const path = usePathname()
  const[show,setShow]=useState({show:false,isSelected:0})

  const optionList =
  [
    {
      label:"dashboard",
      icon:faHouse,
    },
    {
      label:"prospectos",
      icon:faFolder,
    },
    {
      label:"certificados",
      icon:faChartPie,
    },
    {
      label:"certificados",
      icon:faDollar,
    },
    {
      label:"certificados",
      icon:faPaperPlane,
    },
    {
      label:"certificados",
      icon:faRotateRight,
    },
    {
      label:"certificados",
      icon:faUser,
    },
    {
      label:"certificados",
      icon:faEnvelope,
    },
  ]

  return (
    <>
      {
        optionList.map((opt,pos)=>
          {
            return (
              <NavbarOption
                key={pos}
                id={pos}
                pathname={path}
                show={show}
                setShow={setShow}
                {...opt}
              />
            );
          })
      }
      {/* <NavbarOption
        href={"/"}
        label={}
        icon={faHouse}
        pathname={path}
        isHome={true}
      />
      <NavbarOption
        href={"/prospectos"}
        label={"prospectos"}
        icon={faFolder}
        pathname={path}
      />
      <NavbarOption
        href={"/certificados"}
        label={"certificados"}
        icon={faChartPie}
        pathname={path}
      />
      <NavbarOption
        href={"/pagos"}
        label={"pagos"}
        icon={faDollar}
        pathname={path}
      />
      <NavbarOption
        href={"/envios"}
        label={"envios"}
        icon={faPaperPlane}
        pathname={path}
      />
      <NavbarOption
        href={"/pendientes"}
        label={"pendientes"}
        icon={faRotateRight}
        pathname={path}
      />
      <NavbarOption
        href={"/usuarios"}
        label={"usuarios"}
        icon={faUser}
        pathname={path}
      />
      <NavbarOption
        href={"/email"}
        label={"email"}
        icon={faEnvelope}
        pathname={path}
      /> */}
    </>
  );
}
