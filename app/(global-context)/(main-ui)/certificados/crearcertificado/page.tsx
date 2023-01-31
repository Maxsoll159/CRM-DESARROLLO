export default function PagreCrearCertificado() {
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
                    <h1 className="text-gray-400 font-medium text-2xl">
                        Crear Certificados Masivamente
                    </h1>
                    <div className="flex justify-between mt-10 gap-10 flex-wrap">
                        <div className="w-full mx-auto xl:w-[48%] lg:w-[48%]">
                            <table className="border-collapse border border-slate-500 w-full">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-600 ">State</th>
                                        <th className="border border-slate-600 ">City</th>
                                        <th className="border border-slate-600 ">City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-700 ">Indiana</td>
                                        <td className="border border-slate-700 ">Indianapolis</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ">Ohio</td>
                                        <td className="border border-slate-700 ">Columbus</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 ">Michigan</td>
                                        <td className="border border-slate-700 ">Detroit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full xl:w-[48%] lg:w-[48%]">
                            <div className="w-full bg-green-100 py-20 border-dashed border-2 border-gray-600">
                                <h2 className="text-center font-semibold text-lg">
                                    Subir Archivo Excel
                                </h2>
                                <div className="flex justify-center mt-10">
                                    <i className="fa-solid fa-file-excel fa-3x text-center"></i>
                                </div>
                                <form className="flex items-center space-x-6 justify-center mt-10">
                                    <div className="shrink-0"></div>
                                    <label className="block">
                                        <input
                                            type="file"
                                            className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-green-50 file:text-green-700
                                        hover:file:bg-green-100
                    "/>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
