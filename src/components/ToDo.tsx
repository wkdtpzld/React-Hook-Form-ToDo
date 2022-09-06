import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

const ToDo = ({ text, category, id }:IToDo) => {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (newCategory: IToDo["category"]) => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = { text, id, category: newCategory };

            localStorage.setItem("toDos", JSON.stringify([...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)]));
            return JSON.parse(localStorage.getItem("toDos")!);
        })
    };

    const DeleteBtn = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            localStorage.setItem("toDos", JSON.stringify([...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)]));
            return JSON.parse(localStorage.getItem("toDos")!);
        })
    };

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && <button onClick={() => onClick(Categories.DOING)}>Doing</button>} 
            {category !== Categories.TO_DO && <button onClick={() => onClick(Categories.TO_DO)}>ToDo</button>}
            {category !== Categories.DONE && <button onClick={() => onClick(Categories.DONE)}>Done</button>}
            <button onClick={DeleteBtn}>Delete</button>
        </li>
    )
}

export default ToDo;