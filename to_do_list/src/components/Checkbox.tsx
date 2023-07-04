import { ChangeEvent, useState } from "react";

interface Props {
    id: string;
    name: string;
    stateInitial?: boolean;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox(props: Props) {
    const [state, setState] = useState<boolean>(props.stateInitial || false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState(event.target.checked);
        props.handleChange?.(event);
    };

    // content-['\f00c']

    return (
        <input
            className="
            appearance-none cursor-pointer relative z-0 transition duration-75
            w-5 h-5 rounded-full flex-shrink-0
            border-2 border-sky-500 bg-transparent hover:border-sky-600
            checked:bg-purple-700 checked:border-purple-700 checked:hover:bg-purple-600 checked:hover:border-purple-600
            checked:before:absolute before:w-3 before:h-3 before:bottom-1 before:translate-x-0.5
            checked:before:content-['\2713'] before:text-gray-100 leading-none
            "
            type="checkbox"
            id={props.id}
            name={props.name}
            checked={state}
            onChange={handleChange}
        />
    );
}

export default Checkbox;
