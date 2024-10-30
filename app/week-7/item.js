export default function Item({ name, quantity, category }) {
    return(
        <li className="list-none bg-slate-900 m-4 p-2 max-w-sm">
            <h1 className="text-xl font-bold">{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </li>
    )
}