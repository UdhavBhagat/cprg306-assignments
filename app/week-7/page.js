"use client"

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './item.json';


export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
        setItems([...items, item]);
    }
    return(
        <main>
            <h1 className="text-2xl font-bold m-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}