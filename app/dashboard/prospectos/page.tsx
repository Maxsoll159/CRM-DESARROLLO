import TableProspectos from "@/components/prospectos/TableProspectos";

export default function Prospectos() {
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
                    <p className="text-gray-400 font-medium">PROSPECTOS</p>

                    <TableProspectos/>
                </div>
            </div>
        </div>

    )
}