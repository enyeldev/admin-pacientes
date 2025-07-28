import { useForm } from "react-hook-form";
import type { UserLogin } from "../types";

import { BtnSubmit } from "../../../components/BtnSubmit";
import { useAuthStore } from "../store/store";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorComponent } from "../../../components/ErrorComponent";

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLogin>();

  const navigate = useNavigate();

  const { logIn } = useAuthStore();

  const registerPatient = (data: UserLogin) => {
    try {
      logIn(data);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        console.log(`Error desconocido: ${error}`);
      }
    }
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
          {errors.username && (
            <ErrorComponent>{errors.username.message}</ErrorComponent>
          )}
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
          {errors.password && (
            <ErrorComponent>{errors.password.message}</ErrorComponent>
          )}
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
