'use client'

import React,{useContext, useState} from 'react'
import {Field} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { pagosNewFormContext } from '../../PagosNewForm';

interface props
{
    label?:string;
    type?:string;
    options?:Array<string>|undefined;
    name?:string;
    as?:string;
    flex?:number;
}

export default function FormOption(props:props)
{
    const
    {
      label,
      type,
      as='input',
      options,
      flex=1,
      name,
    }=props

    const myStyles = 'px-[.4rem] py-[.2rem] h-[30.8px] w-[100%] cursor-auto border-inputBorder border-[1px] focus:border-primary outline-none rounded-[.3rem]'

    return (
      <div
        className={`flex flex-col relative`}
        style={{
          flex: flex,
        }}
      >
        <label className="text-black uppercase">{label}</label>
        {type !== "file" && (
          <Field
            name={name}
            as={options ? "select" : as}
            className={`${myStyles}`}
            size={1}
            type={type}
          >
            {options && (
              <>
                {options.map((opt, pos) => {
                  return (
                    <option key={pos} value={opt}>
                      {opt}
                    </option>
                  );
                })}
              </>
            )}
          </Field>
        )}
        {type === "file" && (
          <FileField myStyles={myStyles} name={name}/>
        )}
      </div>
    );
}


interface isFileInside
{
  isIn:boolean;
  name:string
}
function FileField({myStyles,name}:{myStyles:string,name:string|undefined})
{
  const[isFocus,setIsFocus]=useState<boolean>(false)
  const[isFileInside,setIsFileInside]=useState<isFileInside>({isIn:false,name:''})
  const{setIsOk,isOk}=useContext(pagosNewFormContext)

  const isAllGood =isFileInside.isIn ? isOk : true

  return(
    <>
      <Field
        type={"file"}
        name={name}
        onChange={(e: any) => gettingImg(e, setIsOk, setIsFileInside)}
        className={`${myStyles} opacity-0`}
        accept={"image/png, image/jpeg"}
        onMouseEnter={() => setIsFocus(true)}
        onMouseLeave={() => setIsFocus(false)}
      />
      <div
        className={`absolute pointer-events-none left-0 bottom-0 w-[100%] h-[30.8px] border-[1px] flex justify-around items-center ${
          isAllGood ? "" : "text-red-500 border-red-500"
        } ${
          isFocus
            ? "text-primary border-primary"
            : "text-myBlack border-myBlack"
        }`}
      >
        <span className='max-w-[80%] whitespace-nowrap text-ellipsis overflow-hidden'>
          {isFileInside.isIn&&isOk&&<>{isFileInside.name}</>}
          {!isFileInside.isIn && <>Subir Imagen</>}
          {isFileInside.isIn && !isOk && <>Solo Imagenes PNG o JPG</>}
        </span>
        <FontAwesomeIcon icon={faUpload} />
      </div>
    </>
  );
}

function gettingImg(e:any,setIsOk:React.Dispatch<React.SetStateAction<boolean>>,setIsFileInside:React.Dispatch<React.SetStateAction<isFileInside>>)
{
   const isType= ['image/png','image/jpeg'].some(typ=>typ===e.target.files[0].type)

   if(isType)
   {
     setIsOk(true)
     setIsFileInside({isIn:true,name:e.target.files[0].name})
     return
   }  
   setIsOk(false)
}