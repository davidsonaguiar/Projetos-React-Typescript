import { ClipboardIcon } from "@heroicons/react/24/outline";

function ListVoid() {
    return(
        <div className="
            w-full max-w-2xl p-5 mt-5 mx-auto  transition duration-75
            border-t-2 border-t-neutral-800
            flex flex-col items-center gap-3" >
            <ClipboardIcon width={56} stroke="#333"/>
            <h3 className="text-md font-bold text-neutral-500 leading-none">Você ainda não tem tarefas cadastradas</h3>
            <p className="text-sm text-neutral-500 leading-none">Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}

export default ListVoid;