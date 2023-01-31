import Link from "next/link";

export default function PagreCrearCertificado() {
    return (

        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
                    <Link href="/dashboard/certificados/crearcertificado/" className="flex items-center gap-2 text-blue-500 font-medium">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        Regresar
                    </Link>
                    sE RIE NOMAS
                </div>
            </div>
        </div>

    )
}