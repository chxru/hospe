import { Router } from 'express';
import { ExpressErrorResponseHandler } from '../../errors';
import {
  CreateEmployee,
  DeleteEmployee,
  FindOneEmployeeByName,
  UpdateEmployee,
} from './employee.service';

export const router = Router();

router.get('/doctor/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const data = await FindOneEmployeeByName(name);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.post('/doctor', async (req, res) => {
  try {
    const data = await CreateEmployee(req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.put('/doctor/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UpdateEmployee(id, req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.delete('/doctor/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await DeleteEmployee(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
