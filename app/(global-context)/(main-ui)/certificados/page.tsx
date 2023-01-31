
import MyBlock from '@/components/MyBlock/MyBlock'
import dynamic from 'next/dynamic'

const TableData = dynamic(() => import('@/components/datatable/TableData'), { ssr: false })
export default function PageCertificado() {

    return (
        <MyBlock title='Certificados' >
            <TableData />
        </MyBlock>
    )
}