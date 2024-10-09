"use client";

import React, { useState } from "react";

function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = function() {
        setQuantity(quantity + 1);
    }

    const decrement = function() {
        setQuantity(quantity - 1);
    }

    return(
        <section className="flex justify-center">
        <div className=" flex justify-between bg-white w-36 p-3">
            <p className="text-black">{quantity}</p>
            <div className="flex gap-1">
            <button onClick={increment} className="bg-blue-400 rounded-lg w-10 hover:bg-blue-600 disabled:bg-slate-400" disabled={quantity==20}>+</button>
            <button onClick={decrement} className="bg-blue-400 rounded-lg w-10 hover:bg-blue-600 disabled:bg-slate-400" disabled={quantity==1}>-</button>
            </div>
        </div>
        </section>
    );
}

export default NewItem;