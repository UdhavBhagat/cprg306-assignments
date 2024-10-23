export default function Item(props) {
    return(
        <li className="list-none bg-slate-900 m-4 p-2 max-w-sm">
            <h1 className="text-xl font-bold">{props.name}</h1>
            <p>Buy {props.quantity} in {props.category}</p>
        </li>
    )
}