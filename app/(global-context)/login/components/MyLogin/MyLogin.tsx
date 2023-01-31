'use client'

import Spinner from '@/components/Spinner/Spinner';
import React,{useState} from 'react'
import ErrMsg from '../FormLogin/components/ErrMsg';
import FormLogin from '../FormLogin/FormLogin';

export default function MyLogin() 
{
  const [errMsg, setErrMsg] = useState<boolean>(false);
  const[isWrapping,setIsWrapping]=useState<boolean>(false)

  return (
    <div className='bg-[#fff] fixed h-[100%] w-[100%]'>
      <div className={`fixed w-[100%] h-[100%] flex justify-center items-center transition-all duration-200 pointer-events-none bg-myBlack ${isWrapping ? 'opacity-[.8]':'opacity-0'} z-[999]`} >
        <Spinner size={20}/>
      </div>
      <div className="flex justify-center">
        <div className="pt-[5rem]">
          <div className="w-[33rem] max-w-[100%] mb-[3rem]">
            <img
              src="/imgs/logoLogin.png"
              className="w-[100%] px-[3rem] mb-[1rem]"
              alt=""
            />
            <div className="bg-[#fff] px-[3rem] pt-[2rem] pb-[1.5rem]">
              <h1 className="text-[#54504B] text-[2rem] text-center font-medium mb-[1rem]">
                Member Login
              </h1>
              <FormLogin setErrMsg={setErrMsg} setIsWrapping={setIsWrapping} />
            </div>
          </div>
          <div className="flex justify-center">{errMsg && <ErrMsg />}</div>
        </div>
      </div>
    </div>
  );
}
