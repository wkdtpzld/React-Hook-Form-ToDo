import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoSelector, categoryState, Categories } from '../atoms';
import ToDo from "./ToDo";


const ToDoList = () => {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(parseInt(event.currentTarget.value as any));
    };

    console.log(toDos);
    

    return (
        <div>
            <h1>To Dos</h1>
            <select onInput={onInput} value={category}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((item) => <ToDo key={item.id} {...item} />)}
        </div>
    )
}

export default ToDoList;