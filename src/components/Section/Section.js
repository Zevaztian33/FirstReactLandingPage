import React from 'react'

export default function Section(){
    return(
        <div className="flex flex-col lg:flex-row m-2 lg:m-5">
            <div className="lg:mx-5 w-full lg:w-3/5 text-white">
                <h2 className="text-2xl font-semibold text-left">Subtitulo</h2>
                <p className="text-base text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="lg:mx-5 bg-black text-yellow-500 text-center lg:px-32 py-4 rounded-2xl">
                <h2 className="text-3xl font-semibold"><u>Lista de opciones</u></h2>
                <ul>
                    <li>Opción 1</li>
                    <li>Opción 2</li>
                    <li>Opción 3</li>
                    <li>Opción 4</li>
                    <li>Opción 5</li>
                </ul>
            </div>
        </div>
    )
}