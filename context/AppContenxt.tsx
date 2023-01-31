'use client'

import postRequest from '@/helpers/postRequest';
import React, { useEffect, useState } from 'react'
import user from '@/interfaces/user';
import { useRouter } from 'next/navigation';
import appContextValues from '@/interfaces/appContextValues';

export const appContext=React.createContext<appContextValues>(
  {
     user:
     {
      avatar:'',
      correo:'',
      id:'',
      nombre:'',
      tipo:'',
      token:'',
      isLogin:false
     },
     setUser:()=>null
  }
)


export default function AppContenxt({children}:{children:any}) 
{
  const[user,setUser]=useState<user|undefined>(undefined)
  const router = useRouter()

  function gettingUser()
  {
    return localStorage.getItem('myUserCRM')
  }

  useEffect(()=>
  {
    const user = gettingUser()
    if(user===null)return router.push('/login') 
    
    const form = new FormData()
    form.append('token',JSON.parse(user).token)
    
    postRequest(form,'validation')
    .then(res=>
        {
            if(res===false)return
            setUser(res)
        })
  },[])

  useEffect(()=>
  {
    if(user!==undefined)
    {
       if(user.isLogin===false)return router.push('/login') 

       localStorage.setItem('myUserCRM',JSON.stringify(user))
       return
    }
  },[user])

  const values:appContextValues = 
  {
    user,
    setUser
  }

  return (
    <appContext.Provider 
     value=
     {
      values
     }
     >
      {children}
    </appContext.Provider>
  )
}

