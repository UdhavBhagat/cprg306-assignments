"use client"
import React, { useState } from 'react'
import Item from './item';


export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const sort = [...items].sort((first, second) => {
        if (sortBy === "name") {
          if (first.name > second.name) {
            return 1;
          } else if (first.name < second.name) {
            return -1;
          }
          return 0;
        } else if (sortBy === "category") {
          if (first.category > second.category) {
            return 1;
          } else if (first.category < second.category) {
            return -1;
          }
          return 0;
        }
    })
      return(
        <section>
            <div className="flex items-center">
                <p> Sort By: </p>
                <button
                onClick={() => setSortBy("name")}
                className={`${sortBy == 'name' ? 'bg-orange-500' : 'bg-orange-700'} p-2 m-4 rounded-lg`}>
                    Name
                </button>
                <button
                onClick={() => setSortBy("category")}
                className={`${sortBy == 'category' ? 'bg-orange-500' : 'bg-orange-700'} p-2 m-4 rounded-lg`}>
                    Category
                </button>
            </div>
            <div>
                {sort.map(item => (
                <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
                ))}
            </div>
        </section>
      );
}