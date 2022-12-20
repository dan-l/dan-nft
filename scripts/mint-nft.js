require("dotenv").config()
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")

const API_URL = process.env.API_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY
const TOKEN_URI = process.env.TOKEN_URI

const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/DanNFT.sol/DanNFT.json")
// console.log(JSON.stringify(contract.abi, null, 2))

const contractAddress = require("../contracts/contract-address.json").NFT
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)


async function mintNFT() {
    const data = nftContract.methods.mintNFT(PUBLIC_KEY, TOKEN_URI).encodeABI()

    await createTransaction(
        PUBLIC_KEY, 
        contractAddress,
        data
    )    
}

async function createTransaction(from, to, data) {
    // Get latest nonce
    // The nonce specification is used to keep track of the number of transactions sent from your address 
    /// — which we need for security purposes and to prevent replay attacks
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest')
    const gas = 500000

    const tx = {
        from,
        to,
        nonce,
        gas,
        data
    }

    try {
        // Make sure its web3.eth.accounts instead of web3.eth so that its using the signer
        const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
        const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        // Use this tx hash to make sure its mined and didn't get dropped by network
        const txHash = txReceipt.transactionHash
        console.log(
            "The hash of your transaction is: ",
            txHash,
            "\nCheck Alchemy's Mempool to view the status of your transaction!"
          )
    } catch (e) {
        console.error("Error creating transaction: ", e)
    }
}


mintNFT()


