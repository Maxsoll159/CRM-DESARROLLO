export default function EditarCer({ params }: any) {
    const { id } = params
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
                    {id}
                </div>
            </div>
        </div>
    )
}