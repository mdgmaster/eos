import { NewPatient, NewEntry, Gender, Entry, } from './types';

export const toNewPatient = (object: any): NewPatient => {
  return {
    name: parseName(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    entries: parseEntries(object.entries)
  };
};

export const toNewEntry = (object: any): NewEntry => {
      return{ 
        ...object,
        description: parseString(object.description, "description"),
        date: parseDate(object.date),
        type: parseString(object.type, "type"),
        specialist: parseString(object.specialist, "specialist"),
        diagnosisCodes: object.diagnosisCodes ? parseDiagnosis(object.diagnosisCodes) : undefined,
      };
  };


const parseDiagnosis = (value: any): string[] => {
  if(!value || !isDiagnose(value)){
    throw new Error('Incorrect or missing type: '+ value);
  }
  return value;
};

const isDiagnose = (param: any): param is string[] => {
  return param as string[] !== undefined; 
}

const parseString = (value: any, param: string): string => {
  if(!value || !isString(value)){
    throw new Error('Incorrect or missing '+ param);
  }
  return value;
}

const parseEntries = (entries: any): Entry[] => {
  if(!entries || !isEntry(entries)) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing type: ' + entries);
  }
  return entries;
};

const isEntry = (param: any): param is Entry[] => {
  return param as Entry[] !== undefined; 
};

const parseName = (name: any): string => {
  if(!name || !isString(name) ) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing name: '+ name);
  }
  return name;
};

const parseSsn = (ssn : any): string => {
  if(!ssn || !isString(ssn)) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing name: '+ ssn);
  }
  return ssn;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing occupation: '+occupation);
  }
  return occupation;
};

const isString = (text:any): text is string => {
  return typeof text === 'string' || text instanceof String;
};


const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  if(!date || !isString(date) || !isDate(date)) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing gender: '+ gender);
  }
  return gender;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

