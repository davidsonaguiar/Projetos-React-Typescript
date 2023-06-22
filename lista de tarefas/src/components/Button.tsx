import { ReactNode, MouseEvent } from "react";

interface Props {
    type?: "submit" | "reset" | "button";
    variant?: "add" | "delete";
    disabled?: boolean;
    children?: ReactNode;
    content?: string;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: Props) {
    const variant = {
        add: "p-4  bg-sky-600 hover:bg-sky-500 text-gray-100",
        delete: "p-2 rounded-full bg-transparent hover:bg-neutral-700 text-gray-100 hover:text-red-400 disabled:text-neutral-600 disabled:bg-transparent",
    };

    return (
        <button
            className={`
            text-sm 
            flex items-center gap-2 transition duration-75
            ${props.variant && variant[props.variant]}
            `}
            disabled={props.disabled}
            type={props.type || "button"}
            onClick={props.handleClick}
        >
            {props.content}
            {props.children}
        </button>
    );
}

export default Button;
