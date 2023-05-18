import React from 'react';
import { useLoaderData } from "react-router-dom";
const Toy = () => {
    const toy =  useLoaderData();
    console.log(toy);
    return (
        <div>
            <h1>{toy.toyName}</h1>
        </div>
    );
};

export default Toy;