import { setupWorker } from 'msw';
import { authHandlers } from './auth';

export const worker = setupWorker(...authHandlers);
