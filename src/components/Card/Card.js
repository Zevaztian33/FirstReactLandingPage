import React from 'react'

export default function Card(){
    return (
        <div className="flex flex-col lg:flex-row m-2 lg:m-5 w-full lg:w-2/5 bg-gray-500 rounded-2xl py-2">
            <div className="m-5">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" alt="Avatar" style={{width: "250px"}}/>
            </div>
            <div className="mx-5 text-center">
                <h2 className="text-3xl font-semibold">Titulo</h2>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p className="text-xs text-white">Neque porro quisquam.</p>
            </div>
        </div>
    )
}