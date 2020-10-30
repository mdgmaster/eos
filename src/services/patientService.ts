import patients from '../../data/patients';
import { PatientNossn } from '../types';

const getPatients = (): Array<PatientNossn> => {
  return patients.map(({id, name, dateOfBirth, gender, occupation })=> ({
    id, name, dateOfBirth, gender, occupation  }));
};

export default {
  getPatients 
};