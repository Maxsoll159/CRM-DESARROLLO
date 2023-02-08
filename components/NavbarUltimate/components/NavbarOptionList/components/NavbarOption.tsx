'use client'

import optionList from '@/components/NavbarUltimate/interfaces/optionList';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Dispatch, LegacyRef, MutableRefObject, SetStateAction, useEffect, useRef,useState } from 'react';
interface props
{
  label:string;
  icon:IconProp;
  href:string;
  pathname?:string|null;
  isHome?:boolean;
  id:number;
  show:{show:boolean,isSelected:number};
  setShow:Dispatch<SetStateAction<{ show: boolean; isSelected: number; }>>;
  list?:Array<optionList> 
}

export default function NavbarOption(props:props)
{  
  const
  {
    label,
    icon,
    show,
    setShow,
    id,
    href,
    list
  }=props
   
  const container=useRef<HTMLDivElement>(null)

  function getH()
  {
    return container.current ? container.current.offsetHeight : 0
  }

  let isShow = id===show.isSelected

   return (
     <li
       className={`overflow-hidden transition-all duration-200`}
       style={{
         height: `${26 + (show.show && isShow ? getH() : 0)}px`,
       }}
     >
       <div ref={container}>
         <Link
           href={href}
           className="nav-option flex relative items-center text-[15px] font-medium pl-[1.3rem] hover:text-myWhite gap-[1.8rem] desktop:text-[13px] capitalize"
           onClick={() =>
             setShow((prev) => {
               return {
                 show: prev.isSelected === id ? !prev.show : true,
                 isSelected: id,
               };
             })
           }
         >
           <div
             className={`bg-myWhite w-[5px] absolute left-0 h-[100%] navbar-pipe ${
               isShow ? "block" : "hidden"
             }`}
           ></div>
           <div className="w-[40px] flex justify-center">
             <FontAwesomeIcon size="2xl" icon={icon} />
           </div>
           <span className="capitalize">{label}</span>
         </Link>
         {list && (
           <section>
             {list.map((entry:optionList, pos:number) => {
               return (
                 <Link key={pos} href={entry.href}>
                   {entry.label}
                 </Link>
               );
             })}
           </section>
         )}
       </div>
     </li>
   );
}
