import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools, persist } from "zustand/middleware";
import type { DraftPatient, Patient } from "../types";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  removePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => ({
  ...patient,
  id: uuidv4(),
});

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set, get) => ({
        patients: [],
        activeId: "",
        addPatient: (data: DraftPatient) => {
          const newPatient = createPatient(data);

          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },
        removePatient(id: Patient["id"]) {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },

        getPatientById(id) {
          set(() => ({ activeId: id }));
        },

        updatePatient(data) {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId
                ? { ...data, id: state.activeId }
                : patient
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "patient-storage",
      }
    )
  )
);
