import primate from '@thewebchimp/primate';
import { router as solanaRouter } from './routes/solana.js';
import { router as defaultRouter } from './routes/default.js';

primate.setup();
await primate.start();

primate.app.use('/solana', solanaRouter);
primate.app.use('/', defaultRouter);
