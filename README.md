# dan-nft

Create your own NFT contract following https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/

## Minting
“Minting an NFT” is the act of publishing a unique instance of your ERC-721 token on the blockchain.

## Mint Contract
Address can be found at `contracts/contract-address.json`

## Mint tx
https://goerli.etherscan.io/tx/0x376ed958c3eae00e0b210ba5c790372aa2d6939f03850dfb2fe5d16fed0eaa63

## Library 

### Alchemy Web 3
Enhanced Web3 library that offers automatic retries and robust WebSocket support.

### Pinata
Interplanetary File System (IPFS) is a decentralized protocol and peer-to-peer network for storing and sharing data in a distributed file system.

Pinata, a convenient IPFS API and toolkit, used to store our NFT asset and metadata.
It generates a CID (content identifier) for uploaded file.
The NFT's metadata and the file it points to are both uploaded to IPFS.
