import { usePatientStore } from "../store/store";
import type { Patient } from "../types";
import { PatientDeatilsItem } from "./PatientDeatilsItem";
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: Patient;
};

export const PatientDeatils = ({ patient }: PatientDetailsProps) => {
  const { removePatient, getPatientById } = usePatientStore();

  const handleDelete = () => {
    removePatient(patient.id);
    toast.error("Paciente eliminado correctamente");
  };

  const handleEdit = () => {
    getPatientById(patient.id);
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDeatilsItem data={patient.id} label="ID" />
      <PatientDeatilsItem data={patient.name} label="Nombre" />
      <PatientDeatilsItem data={patient.caretaker} label="Propietario" />
      <PatientDeatilsItem data={patient.email} label="Email" />
      <PatientDeatilsItem data={patient.email} label="Email" />
      <PatientDeatilsItem data={patient.symptoms} label="Sintomas" />

      <div className="flex flex-col md:flex-row gap-4 justify-between  mt-10">
        <button
          className="bg-indigo-600 text-white py-2 px-10 rounded-lg font-bold uppercase hover:bg-indigo-700 cursor-pointer"
          onClick={handleEdit}
        >
          Editar
        </button>
        <button
          className="bg-red-600 text-white py-2 px-10 rounded-lg font-bold uppercase hover:bg-red-700 cursor-pointer"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
