"use client";

import React, { useState } from "react";

function NewItem() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");
    const [quantity, setQuantity] = useState(1);

    const increment = function() {
        setQuantity(quantity + 1);
    }

    const decrement = function() {
        setQuantity(quantity - 1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert("Added item: " + name + ", quantity: " + quantity + ", category: " + category);
        setName("");
        setCategory("Produce");
        setQuantity(1);
    }

    return(
        <section className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex justify-center bg-slate-900 flex-col max-w-sm rounded-lg p-2">
                    <input
                    type="text"
                    value={name}
                    placeholder="Enter item name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-md w-full mt-5 p-2 text-black"
                    />
                    <div className="flex mt-4 gap-10">
                        <div className="flex justify-between bg-white w-36 rounded-md p-2">
                            <p className="text-black">{quantity}</p>
                            <div className="flex gap-2">
                                <button type="button" onClick={increment} className="bg-blue-400 rounded-lg w-10 hover:bg-blue-600 disabled:bg-slate-400" disabled={quantity==20}>+</button>
                                <button type="button" onClick={decrement} className="bg-blue-400 rounded-lg w-10 hover:bg-blue-600 disabled:bg-slate-400" disabled={quantity==1}>-</button>
                            </div>
                        </div>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg p-2 text-black">
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                <button type="submit" className="bg-blue-400 hover:bg-blue-600 rounded-lg w-full mt-4">+</button>
            </form>
        </section>
    );
}

export default NewItem;