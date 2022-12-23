import { Router } from 'express';
import { ExpressErrorResponseHandler } from '../../errors';
import {
  CreateChanneling,
  DeleteChanneling,
  FindOneChanneling,
  UpdateChanneling,
  FindAllChanneling,
} from './channeling.service';

export const router = Router();

/* find channeling session by id */
router.get(':id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await FindOneChanneling(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* view all channeling sessions */
router.get('/', async (req, res) => {
  try {
    const data = await FindAllChanneling();
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
/* delete channeling session by id */
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await DeleteChanneling(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* create channeling session */
router.post('/create-channeling', async (req, res) => {
  try {
    const data = await CreateChanneling(req.user.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* update channeling session */
router.put('/edit-channeling/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UpdateChanneling(id, req.body);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});
