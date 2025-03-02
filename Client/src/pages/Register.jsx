import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { registerRequest } from "../api/auth";


function Register() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const res = await registerRequest(data);
        console.log(res);
        toast.success("Account created succesfully!");
    };

    // Observar el valor de "password" para compararlo con "repeat-password"
    const password = watch("password");

    return (
        <>
            <h1 className="mb-5">Register</h1>

            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-full bg-zinc-700 text-white px-4 py-2 roudned-md my-2"
                        type="text"
                        placeholder="Username"
                        {...register("username", {
                            required: "Username is required!",
                            minLength: 1,
                            maxLength: 41
                        })}
                    />
                    {errors["username"] && <p className="text-red-500">{errors["username"].message}</p>}

                    <input
                        className="w-full bg-zinc-700 text-white px-4 py-2 roudned-md my-2"
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required!",
                            minLength: 6,
                            maxLength: 56
                        })}
                    />
                    {errors["email"] && <p className="text-red-500">{errors["email"].message}</p>}

                    <input
                        className="w-full bg-zinc-700 text-white px-4 py-2 roudned-md my-2"
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required!",
                            minLength: { value: 4, message: "minimum password length is 4 digits!", },
                            maxLength: 256
                        })}
                    />
                    {errors["password"] && <p className="text-red-500">{errors["password"].message}</p>}

                    <input
                        className="w-full bg-zinc-700 text-white px-4 py-2 roudned-md my-2"
                        type="password"
                        placeholder="Repeat Password"
                        {...register("repeat-password", {
                            required: "Password confirmation is required!",
                            minLength: { value: 4, message: "minimum password length is 4 digits!", },
                            maxLength: 256,
                            validate: (value) => value === password || "Passwords do not match!",
                        })}
                    />
                    {errors["repeat-password"] && <p className="text-red-500">{errors["repeat-password"].message}</p>}

                    <button className="mt-5" type="submit">Create Account</button>
                </form>
            </div>
        </>
    );
}


export default Register;
