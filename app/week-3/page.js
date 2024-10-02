import ItemList from "./item-list";

export default function Page() {
    return(
        <main className="bg-slate-970">
            <h1 className="text-2xl font-bold m-4">Shopping List</h1>
            <ItemList />
        </main>
    )
}