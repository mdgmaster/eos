import patients from '../../data/patients';
import { PatientNossn, Patient, NewPatient } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Array<PatientNossn> => {
  return patients.map(({id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: String(uuidv4()),
    ...patient
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient
};