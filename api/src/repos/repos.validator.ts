import { Request, Response, NextFunction } from "express";
import Joi from "joi";

import logger from "../services/logger";

// Schema to validate the data of the repo for creation
const schema = Joi.object({
  createdAt: Joi.string().required(),
  description: Joi.string().required(),
  diskUsage: Joi.number().required(),
  id: Joi.string(),
  isPrivate: Joi.boolean().required(),
  languages: Joi.array().items(
    Joi.object({
      size: Joi.number(),
      node: Joi.object({
        name: Joi.string(),
      }),
    })
  ),
  name: Joi.string().required(),
  updatedAt: Joi.string().required(),
  url: Joi.string().required(),
});

// Schema for partial updates - all fields are optional
const updateSchema = Joi.object({
  createdAt: Joi.string(),
  description: Joi.string(),
  diskUsage: Joi.number(),
  id: Joi.string(),
  isPrivate: Joi.boolean(),
  languages: Joi.array().items(
    Joi.object({
      size: Joi.number(),
      node: Joi.object({
        name: Joi.string(),
      }),
    })
  ),
  name: Joi.string(),
  updatedAt: Joi.string(),
  url: Joi.string(),
});

// Middleware to validate the data of the repo for creation
const validateRepo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    logger.error({ error: { msg: `Validation repo, ${error.details[0].message}` } });
    res.status(422).json(error);
  } else {
    next();
  }
};

// Middleware to validate partial updates
const validateRepoUpdate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = updateSchema.validate(req.body);
  if (error) {
    logger.error({ error: { msg: `Validation repo update, ${error.details[0].message}` } });
    res.status(422).json(error);
  } else {
    next();
  }
};

export { validateRepo, validateRepoUpdate };
