import {Connection, PublicKey} from '@solana/web3.js';
import {getMint} from '@solana/spl-token';
import 'dotenv/config';
const connection = new Connection(process.env.SOLANA_RPC_URL, 'confirmed');

class SolanaService {
	static async buildSwapTransaction(publicKey, inputMint, outputMint, amount, slippageBps = 0.5, destinationWallet = null,) {

		try {
			const inputMintData = await getMint(connection, new PublicKey(inputMint));

			const outputMintData = await getMint(connection, new PublicKey(outputMint));
			if (!inputMintData || !outputMintData) {
				throw new Error('Invalid input or output mint');
			}

			// max of slippage is 10%
			if (slippageBps > 10) {
				throw new Error('Slippage must be less than 10%');
			}

			const inputDecimals = inputMintData.decimals;
			const inputAmount = amount * Math.pow(10, inputDecimals);
			const slippagePercentage = slippageBps * 100;

			const walletPublicKey = new PublicKey(publicKey);
			let urlGet = `${process.env.JUPITER_QUOTE_API_URL}`;
			urlGet += `?inputMint=${inputMint}&outputMint=${outputMint}`;
			urlGet += `&amount=${inputAmount}&slippageBps=${slippagePercentage}`;
			urlGet += `&swapMode=ExactIn`;

			const quoteResponseData = await fetch(urlGet);
			const quoteResponse = await quoteResponseData.json();

			const response = await fetch(`${process.env.JUPITER_SWAP_API_URL}`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					dynamicComputeUnitLimit: true,
					prioritizationFeeLamports: 'auto',
					quoteResponse,
					userPublicKey: walletPublicKey.toString(),
					wrapAndUnwrapSol: true,
				}),
			});
			const jsonResponse = await response.json();

			if (jsonResponse?.error || !jsonResponse?.swapTransaction) {
				throw new Error(jsonResponse.error);
			}
			return jsonResponse.swapTransaction;
		}catch (error) {
			console.error('Error building swap transaction:', error);
			throw new Error(error);
		}
	}

}

export default SolanaService;
