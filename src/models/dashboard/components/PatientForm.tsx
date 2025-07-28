import { useForm } from "react-hook-form";

import { useEffect } from "react";
import { toast } from "react-toastify";
import type { DraftPatient } from "../types";
import { usePatientStore } from "../store/store";
import { ErrorComponent } from "../../../components/ErrorComponent";
import { BtnSubmit } from "../../../components/BtnSubmit";

export function PatientForm() {
  const { addPatient, activeId, patients, updatePatient } = usePatientStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DraftPatient>();

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeId
      )[0];

      setValue("name", activePatient.name);
      setValue("caretaker", activePatient.caretaker);
      setValue("email", activePatient.email);
      setValue("date", activePatient.date);
      setValue("symptoms", activePatient.symptoms);
    } else {
      reset();
    }
  }, [activeId]);

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data);
      toast.success("Paciente actualizado correctamente");
    } else {
      addPatient(data);
      toast.success("Paciente agregado correctamente");
    }

    reset();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
            })}
          />
          {errors.name && (
            <ErrorComponent>{errors.name.message}</ErrorComponent>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El nombre del propietarios es obligatorios",
            })}
          />

          {errors.caretaker && (
            <ErrorComponent>{errors.caretaker.message}</ErrorComponent>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "El email no es válido",
              },
            })}
          />

          {errors.email && (
            <ErrorComponent>{errors.email.message}</ErrorComponent>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria",
            })}
          />
          {errors.date && (
            <ErrorComponent>{errors.date.message}</ErrorComponent>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los síntomas son obligatorios",
            })}
          ></textarea>
          {errors.symptoms && (
            <ErrorComponent>{errors.symptoms.message}</ErrorComponent>
          )}
        </div>

        <BtnSubmit
          btnText={activeId ? "Actualizar Paciente" : "Guardar Paciente"}
        />
      </form>
    </div>
  );
}
