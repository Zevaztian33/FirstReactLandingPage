import React from 'react';
import Card from './../Card/Card'

export default function Footer(){
    return(
        <div className="flex flex-col lg:flex-row m-5">
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}