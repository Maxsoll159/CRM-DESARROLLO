import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

interface props
{
  label:string;
  icon:IconProp;
  href:string;
  pathname:string|null;
  isHome?:boolean;
}

export default function NavbarOption(props:props)
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
        <Link href={href} className={`nav-option flex relative items-center text-[15px] font-medium pl-[1.3rem] hover:text-myWhite gap-[1.8rem] ${isSelect ? 'text-myWhite':'text-[#7B9CF4]'} desktop:text-[13px]`}>
          <div className={`bg-myWhite w-[5px] absolute left-0 h-[100%] navbar-pipe ${isSelect ? 'block' : 'hidden'}`}></div>
          <div className='w-[40px] flex justify-center'>
            <FontAwesomeIcon size='2xl' icon={icon}/>
          </div>
          <span className='capitalize'>{label}</span> 
        </Link>
     </li>
   )
}