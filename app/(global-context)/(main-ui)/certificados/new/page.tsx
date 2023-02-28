'use client';
import { useRouter } from 'next/navigation';
import ExcelUploader from '@/components/ExcelUploader/ExcelUploader';
import MyBlock from '@/components/MyBlock/MyBlock';
import Massive from './components/Massive';

export default function PagreCrearCertificado() {
    

    return (
      <MyBlock title={"Nueve Certificado"}>
       <Massive/>
      </MyBlock>
    );
}
