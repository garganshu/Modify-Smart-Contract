const hre = require("hardhat");

async function main() {
  
  const contractFactory = await hre.ethers.ContractFactory("ModifyVariable");
  const contract = await contractFactory.deploy(); 

  await contract.deployed(); 

  console.log(`Check address for deployement: ${contract.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
