import SolanaService from '../services/solana.service.js';

class SolanaController {
    static async swapTokens(req, res) {
        const { inputMint, outputMint, amount, publicKey } = req.body;
        let { slippage } = req.body;
        if (!inputMint || !outputMint || !amount || !publicKey) {
            return res.respond({
                status: 400,
                message: `Missing parameter: ${!inputMint ? 'inputMint' : !outputMint ? 'outputMint' : !amount ? 'amount' : 'publicKey'}`,
            });
        }

        if(!slippage) {
            slippage = 0.05;
        }

        try {
            const transaction = await SolanaService.buildSwapTransaction(publicKey, inputMint, outputMint, amount, slippage);
            res.respond({
                status: 200,
                data: { transaction },
                message: 'Swap transaction created',
            });
        } catch (error) {
            res.respond({
                status: 500,
                message: error,
            });
        }
    }
}

export default SolanaController;
