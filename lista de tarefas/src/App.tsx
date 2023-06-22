import { useState, ReactNode } from "react";
import InputText from "./components/InputText";
import Button from "./components/Button";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import Checkbox from "./components/Checkbox";
import Label from "./components/Label";
import ListItem from "./components/ListItem";
import Counter from "./components/Counter";
import Title from "./components/Title";
import ListVoid from "./components/ListVoid";
import Task from "./models/Task";
import {
    deleteTask,
    getName,
    getList,
    addTask,
    updateTask,
} from "./store/store";

function App() {
    const [state, setState] = useState<Task[]>(getList);
    const [stateInput, setStateInput] = useState<string>("");
    const nTask = state.length;
    const nTaskDone = state.filter((task) => task.status).length;

    const list: ReactNode[] = state.map((tarefa) => (
        <ListItem status={tarefa.status} key={tarefa.id}>
            <Label id={tarefa.id} content={tarefa.name} status={tarefa.status}>
                <Checkbox
                    id={tarefa.id}
                    name={tarefa.id}
                    stateInitial={tarefa.status}
                    handleChange={(event) => updateTask(event, state, setState)}
                />
            </Label>
            <Button
                variant="delete"
                disabled={tarefa.status}
                handleClick={() => deleteTask(tarefa.id, state, setState)}
            >
                <TrashIcon width={20} />
            </Button>
        </ListItem>
    ));


    return (
        <>
            <header
                className="
                w-full h-[20vh] fixed top-0 left-0 bg-neutral-950
                flex flex-col items-center justify-center z-50"
            >
                <Title />
                <form
                    className="
                    px-5 pb-2 bg-gradient-to-t to-50% to-neutral-950 from-50% from-neutral-900
                    absolute bottom-0 translate-y-1/2 
                    flex gap-2 w-full max-w-2xl m-auto items-center"
                    onSubmit={(event) =>
                        addTask(
                            event,
                            state,
                            stateInput,
                            setState,
                            setStateInput
                        )
                    }
                >
                    <InputText
                        id="task"
                        name="task"
                        value={stateInput}
                        placeholder="Adicione uma tarefa"
                        handleChange={(event) => getName(event, setStateInput)}
                    />
                    <Button content="Criar" variant="add" type="submit">
                        <PlusCircleIcon width={24} />
                    </Button>
                </form>
            </header>
            <main className="mt-[28vh]">
                <div className="flex gap-2 w-full max-w-2xl p-5 -mb-4 mx-auto items-center justify-between">
                    <Counter
                        label="Tarefas Criadas "
                        value={nTask.toString()}
                    />
                    <Counter
                        label="Concluidas "
                        value={`${nTaskDone.toString()} de ${nTask.toString()}`}
                    />
                </div>
                {list.length > 0 ? (
                    <ul className="w-full max-w-2xl m-auto p-5 flex flex-col gap-3">
                        {list}
                    </ul>
                ) : (
                    <ListVoid />
                )}
            </main>
        </>
    );
}
export default App;
