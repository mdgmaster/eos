export type Diagnose = {
  code: string;
  name: string;
  latin?: string;
};

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose['code']>;
}

export enum HealthCheckRating {
  "Healty" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating; 
}

interface OccupationalHealthCareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?:{
    startDate: string;
    endDate: string;
  }
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: {
    date: string;
    criteria: string;
  }

}

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
};

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"

}

export type PatientNossn = {

  id: string;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  occupation: string;
};

export type Entry = 
| HospitalEntry
| OccupationalHealthCareEntry
| HealthCheckEntry; 


export type NewPatient = Omit<Patient, 'id'>;
export type NewEntry = Omit<Entry, 'id'>;
export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >;
