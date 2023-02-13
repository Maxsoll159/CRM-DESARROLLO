import React from 'react'

export default function MyBlock({title,children=''}:{title:string,children?:JSX.Element|string}) 
{
  return (
    <div className='flex-1'>
      <strong className="text-myTitle block mb-[1.5rem]">{title}</strong>
      <div>{children}</div>
    </div>
  );
}
