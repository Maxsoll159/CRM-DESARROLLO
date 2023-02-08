'use client'
import React from 'react'
import NavbarOptionList from './components/NavbarOptionList/NavbarOptionList';
import UserMenuUltimate from './components/UserMenuUltimate/UserMenuUltimate';

export default function NavbarUltimate() 
{
  
  return (
    <nav className="w-[240px] bg-primary text-myWhite fixed h-[100%]">
      <div className="w-[152px] block desktop:w-[120px] px-[44px] box-content mb-[4.5rem] pt-[44px] desktop:mx-auto">
        <img src="/img/logo-veritcal.png" className="w-[100%]" alt="" />
      </div>
      <ul className="flex flex-col mb-[3rem] gap-[1.5rem]">
        <NavbarOptionList/>  
      </ul>
      <UserMenuUltimate/>
    </nav>
  );
}


