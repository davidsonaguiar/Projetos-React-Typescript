import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    id: string;
    status: boolean;
    content: string;
}

function Label(props: Props) {
    return (
        <label
            className="
            text-sm cursor-pointer transition duration-75
            flex gap-3 flex-row flex-nowrap items-center"
            htmlFor={props.id}
        >
            {props.children}
            {props.content}
        </label>
    );
}

export default Label;
