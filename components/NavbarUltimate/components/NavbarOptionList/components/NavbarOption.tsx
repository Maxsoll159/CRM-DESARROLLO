'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useRef,useState } from 'react';

interface props
{
  label:string;
  icon:IconProp;
  href?:string;
  pathname?:string|null;
  isHome?:boolean;
  id:number
}

export default function NavbarOption(props:props)
{  
  const
  {
    label,
    icon,
    show,
    setShow,
    id
  }=props
   
  const container = useRef()

  function getH()
  {
    return container.current.offsetHeight
  }

  let isShow = id===show.isSelected

   return (
     <li className={`overflow-hidden transition-all duration-200`}
      style=
      {
        {
          height:`${70+(show.show&&isShow ? getH():0)}px`
        }
      }
      >
       {/* <Link href={href} className={`nav-option flex relative items-center text-[15px] font-medium pl-[1.3rem] hover:text-myWhite gap-[1.8rem] ${isSelect ? 'text-myWhite':'text-[#7B9CF4]'} desktop:text-[13px]`}>
          <div className={`bg-myWhite w-[5px] absolute left-0 h-[100%] navbar-pipe ${isSelect ? 'block' : 'hidden'}`}></div>
          <div className='w-[40px] flex justify-center'>
            <FontAwesomeIcon size='2xl' icon={icon}/>
          </div>
          <span className='capitalize'>{label}</span> 
        </Link> */}
       <div ref={container} >
         <button className='h-[70px]'
          onClick={()=>setShow(prev=>{return{show:prev.isSelected===id ? !prev.show:true ,isSelected:id}})}
          >{label}</button>
         <section>
          fdfadsfdas
          fdsfsdafdsa
          fdasfsda
         </section>
       </div>
     </li>
   );
}
