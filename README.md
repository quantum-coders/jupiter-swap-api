# Jupiter Swap API on Solana

## Tutorial

We created tutorials to help you get started with this project. Follow the steps in these tutorials to set up the frontend and backend, and start building your decentralized application.

- **Backend Tutorial:** [Jupiter Swap Backend Tutorial](https://medium.com/@0xjesus/building-a-solana-swap-api-with-node-js-a-comprehensive-guide-55333389c0f6)
- **Frontend Tutorial:** [Jupiter Swap Frontend Tutorial](https://medium.com/@0xjesus/build-your-solana-swap-dapp-with-vue-js-e363f5956a69)

## Overview

Welcome to the **Jupiter Swap API** project, a Node.js-based backend service for performing token swaps on the Solana blockchain using the Jupiter aggregator. This API allows you to seamlessly swap tokens with low slippage and fast transactions, leveraging Solana’s high throughput.

## Features

- **Token Swaps**: Effortlessly swap tokens on the Solana blockchain.
- **Jupiter Integration**: Uses Jupiter, the ultimate aggregator, to get the best swap rates.
- **Low Slippage**: Default slippage of 0.5%, adjustable as needed.
- **Solana Web3 Integration**: Interacts directly with Solana's blockchain using `web3.js`.

## Project Structure

```bash
jupiter-swap-api/
│
├── app.js                 # Entry point of the application
├── controllers/
│   └── solana.controller.js  # Handles the swap requests
├── routes/
│   ├── default.js         # Default route handler
│   └── solana.js          # Solana-related routes
├── services/
│   └── solana.service.js  # Core logic for building swap transactions
├── .env                   # Environment variables (not included in version control)
├── package.json           # Project metadata and dependencies
└── test.http              # HTTP requests for testing the API
```

## Getting Started

### Prerequisites

- Node.js v14+ installed
- Yarn package manager

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/jupiter-swap-api.git
    cd jupiter-swap-api
    ```

2. **Install dependencies**:
    ```bash
    yarn install
    ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory with the following content:

   ```env
   SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
   JUPITER_QUOTE_API_URL=https://quote-api.jup.ag/v1/quote
   JUPITER_SWAP_API_URL=https://swap-api.jup.ag/v1/swap
   ```

4. **Run the server**:
    ```bash
    yarn start
    ```

### API Usage

To perform a token swap, send a POST request to `http://localhost:1337/solana/swap` with the following JSON body:

```json
{
  "publicKey": "YourPublicKey",
  "inputMint": "InputMintAddress",
  "outputMint": "OutputMintAddress",
  "amount": 0.01,
  "slippage": 0.5
}
```

### Testing

Use the `test.http` file to test the API endpoints using an HTTP client like Postman or directly from VSCode.

## Join Us

We are Quantum Coders, the team behind this project. We are passionate about blockchain technology and its potential to revolutionize the world. Join us on our journey to build innovative solutions and contribute to the decentralized future.

**Connect with us:**

- **Quantum Coders on X:** [@qcodersteam](https://x.com/qcodersteam)
- **LunaAI on X:** [@lunadefiai](https://x.com/lunadefiai)
- **Bonkhemist on X:** [@bonkhemist](https://x.com/bonkhemist)
- **_0xJesus on X:** [@_0xjesus](https://x.com/_0xjesus)

## Contributing

We welcome contributions! If you’d like to contribute, fork the repository, create a feature branch, and submit a pull request. We look forward to collaborating with you.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
