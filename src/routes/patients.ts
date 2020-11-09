import express from 'express';
import patientService from '../services/patientService';
import {toNewEntry, toNewPatient} from '../utils';

const router = express.Router();

router.get('/', (_req, res)=> {
  res.send(patientService.getPatients());
});

router.get('/:id', (req, res) => {
  try {
  const patient = patientService.getPatient(req.params.id);
  res.json(patient);
  }catch(e){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
}
});

router.post('/', (req,res)=>{
  try{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);

  }catch(e){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }

});

router.post('/:id/entries', (req,res)=> {
  try{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newEntry = toNewEntry(req.body);
    const addedEntry = patientService.addEntry(req.params.id,newEntry);
    res.json(addedEntry);
    
  }catch(e){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
});

export default router;