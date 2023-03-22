import { styles } from '@/app/(global-context)/(main-ui)/pagos/detalle/[id]/components/ListaCuotas/components/MyPdf/MyPdf'
import React from 'react'

interface props
{
    label:string|undefined,
    initial:string|undefined,
    active:string|undefined,
    isHover:boolean|undefined,
    styles:string|undefined
}

export default function HoverMsg(props:props) 
{
  const { label, initial, active, isHover ,styles } = props;

  return (
    <span
      className={`capitalize absolute ${styles} transition-all duration-200 text-[#fff] bg-[#30394c] py-[.2rem] px-[.4rem] w-fit whitespace-nowrap text-[.8rem] pointer-events-none rounded-[.3rem] ${
        isHover ? active : initial
      }`}
    >
      {label}
    </span>
  );
}
