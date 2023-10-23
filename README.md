# chainlink-ccip

Learning about Chainlink Cross-Chain Interoperability Protocol

1. There are two contracts - 1 Sender.sol (deployed on sepolia) & 2. Receiver.sol (deployed on Mumbai)
2. Sender.sol has a function - sendMessage which will be used to send message to other chain (mumbai here)
3. Receiver.sol has a function - getLastReceivedMessageDetails which will be used to read last message

Deployment

1. Deploy Sender contract on Sepolia chain and than Receiver contract on mumbai chain
2. once contract is deployed transfer link token to contract to pay the fees
