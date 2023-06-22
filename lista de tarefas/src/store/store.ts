import { ChangeEvent, FormEvent } from "react";
import Task from "../models/Task";
import { nanoid } from "nanoid";

export const getList = (): Task[] => {
    return JSON.parse(localStorage.getItem("tarefas") || "[]") as Task[];
};

export const save = (list: Task[]): void => {
    localStorage.setItem("tarefas", JSON.stringify(list));
};

export const getName = (
    event: ChangeEvent<HTMLInputElement>,
    setState: (str: string) => void
) => {
    setState(event.target.value);
};

export const addTask = (
    event: FormEvent<HTMLFormElement>,
    state: Task[],
    stateInput: string,
    setState: (lista: Task[]) => void,
    setStateInput: (name: string) => void
) => {
    event.preventDefault();

    if (stateInput.length > 2) {
        const newState = [
            ...state,
            {
                id: nanoid(4),
                name: stateInput,
                status: false,
            },
        ];

        setState(newState);
        save(newState);

        setStateInput("");
    }
};

export const updateTask = (
    event: ChangeEvent<HTMLInputElement>,
    state: Task[],
    setState: (lista: Task[]) => void
) => {
    const newTasks = state.map((task) =>
        task.id === event.target.id ? { ...task, status: !task.status } : task
    );

    setState(newTasks);
    save(newTasks);
};

export const deleteTask = (
    id: string,
    state: Task[],
    setState: (lista: Task[]) => void
) => {
    const newTasks = state.filter((task) => task.id !== id);
    setState(newTasks);
    save(newTasks);
};
