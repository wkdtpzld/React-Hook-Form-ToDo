import { useForm } from "react-hook-form";

type IFormData = {
    errors: {
        Email: {
            message: string;
        },
        password1: {
            message: string;
        }
    };
    FirstName: string;
    LastName: string;
    Email: string;
    password: string;
    password1: string;
    CheckingPassword: string;
    extraError?: string;
    };
    

const ToDoList = () => {

    const { register, handleSubmit, formState:{errors}, setError } = useForm<IFormData>();
    const onValid = (data:IFormData) => {
        if (data.password !== data.password1) {
            setError(
                "password",
                {
                    message: "Password are not the same",
                },
                { shouldFocus: true }
            );
        }
    }    

    return (
        <div>
            <form
                onSubmit={handleSubmit(onValid)}
                style={{ display: "flex", flexDirection: "column" }}
            >
            <input
                {...register("Email", {
                required: {
                    value: true,
                    message: "email is Required"
                },
                minLength: {
                    value: 10,
                    message: "too short must need 10char"
                },
                pattern: {
                    message: "naver go",
                    value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                },
                validate: (value) => !value.includes("nico"),
                })}
                type="text"
                placeholder="Email"
            />
            <span>
                {errors.Email?.message}
            </span>
            <input
                {...register("FirstName")}
                type="text"
                placeholder="FristName"
            />
            <input {...register("LastName")} type="text" placeholder="LastName" />
            <input
                {...register("password", {
                required: "Password is required",
                minLength: {
                    value: 5,
                    message: "Your password is too short",
                },
                })}
                type="text"
                placeholder="Password"
            />
            <input
                {...register("password1", {
                    required: "Password is required",
                    minLength: {
                        value: 5,
                        message: "Your password is too short",
                    },
                    })}
                type="text"
                placeholder="Password1"
            />
            <span>
                {errors.password?.message}
            </span>
            <button>ADD</button>
            <span>
                {errors.extraError?.message}
            </span>
            </form>
        </div>
    );
}

export default ToDoList;