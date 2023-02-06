'use client'

import React from 'react'
import NavbarOption from './components/NavbarOption';
import { faHouse,faFolder,faChartPie,faDollar, faPaperPlane, faRotateRight, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function NavbarOptionList() 
{
  const path = usePathname()

  return (
    <>
      <NavbarOption
        href={"/"}
        label={"dashboard"}
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
      />
    </>
  );
}