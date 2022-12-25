import { Router } from 'express';
import { ExpressErrorResponseHandler } from '../../errors';
import {
  CreateChanneling,
  DeleteChanneling,
  FindOneChanneling,
  UpdateChanneling,
  FindAllChannelingByDocId,
  FindAllChannelingByDocType,
} from './channeling.service';

import { FindOneEmployee } from '../employee/employee.service';
import {
  zCreateChanneling,
  zDeleteChanneling,
  zFinalAllChannelingByDocId,
  zFindAllChannelingByDocType,
  zFindOneChanneling,
  ZValidate,
} from '@hospe/types';

export const router = Router();

/* find channeling session by id */
router.get(':id', ZValidate(zFindOneChanneling), async (req, res) => {
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
    // TODO: changed last moment, should be replaced with FindAllChanneling
    const data = await FindAllChannelingByDocId(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

router.get(
  '/doctor/:docId',
  ZValidate(zFinalAllChannelingByDocId),
  async (req, res) => {
    try {
      const data = await FindAllChannelingByDocId(req.params.docId);
      res.status(200).json(data);
    } catch (error) {
      ExpressErrorResponseHandler(res, error);
    }
  }
);

router.get(
  '/type/:docType',
  ZValidate(zFindAllChannelingByDocType),
  async (req, res) => {
    try {
      const data = await FindAllChannelingByDocType(req.params.docType);
      res.status(200).json(data);
    } catch (error) {
      ExpressErrorResponseHandler(res, error);
    }
  }
);

/* delete channeling session by id */
router.delete('/:id', ZValidate(zDeleteChanneling), async (req, res) => {
  try {
    const id = req.params.id;
    const data = await DeleteChanneling(id);
    res.status(200).json(data);
  } catch (error) {
    ExpressErrorResponseHandler(res, error);
  }
});

/* create channeling session */
router.post(
  '/create-channeling',
  ZValidate(zCreateChanneling),
  async (req, res) => {
    try {
      const docData = await FindOneEmployee(req.user.id);

      if (!docData) throw new Error('Doctor not found');

      const docType = docData.specialization;
      const docName = docData.displayName;
      const data = await CreateChanneling(
        req.user.id,
        docType,
        docName,
        req.body
      );
      res.status(200).json(data);
    } catch (error) {
      ExpressErrorResponseHandler(res, error);
    }
  }
);

/* update channeling session */
router.put(
  '/edit-channeling/:id',
  ZValidate(zCreateChanneling.partial()),
  async (req, res) => {
    try {
      const id = req.params.id;
      const data = await UpdateChanneling(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      ExpressErrorResponseHandler(res, error);
    }
  }
);
