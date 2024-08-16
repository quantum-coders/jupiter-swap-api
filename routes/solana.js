import { getRouter } from '@thewebchimp/primate';
import SolanaController from '../controllers/solana.controller.js';

const router = getRouter();

router.post('/swap', SolanaController.swapTokens);

export { router };
