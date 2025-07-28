import { useForm } from "react-hook-form";
import type { UserLogin } from "../types";
import { Error } from "../../../components/Error";
import { BtnSubmit } from "../../../components/BtnSubmit";
import { useAuthStore } from "../store/store";
import { useNavigate, Link } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLogin>();

  const navigate = useNavigate();

  const { logIn } = useAuthStore();

  const registerPatient = (data: UserLogin) => {
    const resposne = logIn(data);

    if (resposne) navigate("/main");
  };

  return (
    <div className="bg-white shadow-sm rounded-md p-4">
      <h1 className="font-black text-xl text-center">
        Inicia Sesion y Administra tus{" "}
        <span className="text-indigo-700">Pacientes</span>
      </h1>

      <form
        className="mt-4 flex flex-col gap-4"
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="">
          <label htmlFor="username" className="text-sm font-bold">
            Usuario
          </label>
          <input
            id="username"
            className="w-full p-2 border border-gray-100"
            type="text"
            placeholder="Nombre del Usuario"
            {...register("username", {
              required: "El nombre del usuario es obligatorio",
            })}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </div>

        <div className="">
          <label htmlFor="password" className="text-sm font-bold">
            Contraseña
          </label>
          <input
            id="password"
            className="w-full p-2 border border-gray-100"
            type="password"
            placeholder="Contraseña del Usuario"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </div>

        <p className="text-center text-sm font-bold">
          No tienes una cuenta?{" "}
          <Link
            to={"singUp"}
            className="underline text-indigo-700 cursor-pointer"
          >
            Registrate aqui
          </Link>
        </p>

        <BtnSubmit btnText={"Iniciar Sesion"} />
      </form>
    </div>
  );
};
