import { Router } from 'express';
import { ExpressErrorResponseHandler } from '../../errors';
import {
  CreateChanneling,
  DeleteChanneling,
  FindOneChanneling,
  UpdateChanneling,
} from './channeling.service';

export const router = Router();

router.get(':id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await FindOneChanneling(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await DeleteChanneling(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.post('/create-channeling', async (req, res) => {
  try {
    const data = await CreateChanneling(req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.put('/edit-channeling/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UpdateChanneling(id, req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
