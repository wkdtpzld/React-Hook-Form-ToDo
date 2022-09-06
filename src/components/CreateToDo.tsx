import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';
import { toDoState, categoryState } from '../atoms';

interface IToDoForm {
    toDo: string;

}

const CreateToDo = () => {

    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);

    const {
        register,
        handleSubmit,
        setValue
    } = useForm<IToDoForm>();

    const handleValue = ({toDo}:IToDoForm) => {
        setToDos(oldToDos => {
            localStorage.setItem
                ("toDos", JSON.stringify([...oldToDos, { text: toDo, category, id: Date.now() }]));
            
            return JSON.parse(localStorage.getItem("toDos")!);
        });
        setValue("toDo", "");
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleValue)}>
                <input {...register("toDo", {
                    required: {
                        value: true,
                        message: "you must Input a ToDo"
                    }
                })} placeholder="Write a ToDo" />
                <button>ADD</button>
            </form>
        </>
    )
}

export default CreateToDo;