# Jupiter Swap API on Solana

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
