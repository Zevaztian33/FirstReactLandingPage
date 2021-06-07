import React from 'react'
import Button from './../Button/Button'

export default function Header(){
    return(
        <div className="flex flex-col lg:flex-row m-2 lg:m-5">
            <div className="lg:mx-5 w-full lg:w-2/5">
                <img className="rounded-2xl" src="https://cdn.pixabay.com/photo/2021/06/03/15/45/chameleon-6307349_960_720.jpg" alt="Imagen de ejemplo"/>
            </div>
            <div className="lg:mx-5 w-full lg:w-2/4">
                <h2 className="text-3xl font-semibold text-left">Esta Landing Page es de práctica</h2>
                <p className="lg:text-xl text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="text-right">
                    <Button />
                    <p className="text-sm">Neque porro quisquam est qui dolorem ipsum.</p>
                </div>
            </div>
        </div>
    )
}