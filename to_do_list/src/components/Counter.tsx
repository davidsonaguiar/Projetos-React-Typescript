interface Props {
    label: string;
    value: string;
}

function Counter(props: Props) {
    return(
        <p className="text-sky-600 text-xs transition duration-75">
            {props.label}
            <span className="py-2 px-4 bg-neutral-800 text-neutral-100 transition duration-75">
                {props.value}
            </span>
        </p>
    )
}

export default Counter;