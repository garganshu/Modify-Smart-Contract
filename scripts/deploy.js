const hre = require("hardhat");

async function main() {
  
  let ModifyVariable = await hre.ethers.getContractFactory("ModifyVariable");
  let contract = await ModifyVariable.deploy(10); 

  await contract.deployed(); 

  console.log(`Check address for deployement: ${contract.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
