import { ChangeEvent } from "react";

interface Props {
    id: string;
    name: string;
    value: string;
    className?: string;
    placeholder: string;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputText(props: Props) {
    return (
        <input
            id={props.id}
            type="text"
            name={props.name}
            className={`
            w-full p-4 transition duration-75
            text-neutral-400 text-base
            bg-neutral-800 border border-neutral-950
            focus:outline-purple-700 focus:text-gray-100
            focus:placeholder:text-gray-100
            placeholder:text-neutral-400 placeholder:text-base
            hover:placeholder:text-gray-100
             ${props?.className}`}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    );
}

export default InputText;