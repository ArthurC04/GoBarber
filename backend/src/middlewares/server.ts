import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';

import routes from '../routes';
import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

import './database';
