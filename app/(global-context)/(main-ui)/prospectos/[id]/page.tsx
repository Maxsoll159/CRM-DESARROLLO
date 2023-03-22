"use client"
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ModalProspecto } from './components/ModalProspecto';

const TableProspectosId = dynamic(() => import("./components/TableprospectosId"), { ssr: false })
export default function ProspectosId({ params }: any) {
    const { id } = params
    const router = useRouter();
    return (

        <>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='Montserrat font-black text-2xl'>Prospectos Curso SIAF Básico</h1>
                <div className='flex gap-3 flex-wrap'>
                    <ModalProspecto />
                    <button className='border border-[#00CCF2] py-2 px-3 rounded-full text-[#00CCF2] font-medium' onClick={() => router.push('/dashboard/prospectos/id/creacionmasivo')}>Agregar Masivo</button>
                </div>  
            </div>
            <TableProspectosId id={id} />
        </>
    )
}