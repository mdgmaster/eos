import patients from '../../data/patients';
import { PatientNossn, Patient, NewPatient, Entry, NewEntry } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Array<PatientNossn> => {
  return patients.map(({id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    id: String(uuidv4()),
    ...patient
  };
  patients.push(newPatient);
  return newPatient;
};

const addEntry = (id: string, entry: NewEntry): Entry => {
  const newEntry = <Entry> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    id: String(uuidv4()),
    ...entry 
  };
      patients.map( patient => {
        if(patient.id === id){
          patient.entries.push(newEntry);
        }
      });
  return newEntry;
};

const getPatient = (id: string): Patient => {
    const patient = patients.find(patient => patient.id === id);
  if (!patient) {
    throw new Error('No patient found for this id');
  }
  return patient;
};

export default {
  getPatients,
  addPatient,
  getPatient,
  addEntry,
};