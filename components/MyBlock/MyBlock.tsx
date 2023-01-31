import React from 'react'

export default function MyBlock({title,children=''}:{title:string,children?:JSX.Element|string}) 
{
  return (
    <div className='flex-1'>
      <strong className="text-myTitle block mb-[1.5rem]">{title}</strong>
      <div className="bg-myWhite p-[1.3rem] shadow-lg">{children}</div>
    </div>
  );
}
