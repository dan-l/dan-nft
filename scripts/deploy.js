const fs = require("fs");

async function main() {
    const danNFT = await ethers.getContractFactory("DanNFT")

    // Start deployment, returning a promise that resolves to a contract object
    const danNFTContract = await danNFT.deploy()
    await danNFTContract.deployed()
    const contractAddress = danNFTContract.address
    console.log("Contract deployed to address:", contractAddress)
    
    const contractsDir = __dirname + "/../contracts";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/contract-address.json",
        JSON.stringify({ NFT: contractAddress }, undefined, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
