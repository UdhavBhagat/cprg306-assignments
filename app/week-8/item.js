import React from "react";

export default function Item({name, quantity, category, onSelect}) {
    return(
        <li className="list-none bg-slate-900 m-4 p-2 max-w-sm hover:bg-orange-500" onClick={() => {
            onSelect(name)}}>
            <h1 className="text-xl font-bold">{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </li>
    )
}