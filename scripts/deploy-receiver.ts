import { ethers } from "hardhat";

async function main() {
  const MUMBAI_ROUTER = "0x70499c328e1E2a3c41108bd3730F6670a44595D1";
  const receiverContract = await ethers.deployContract(
    "Receiver",
    [MUMBAI_ROUTER],
    {}
  );

  await receiverContract.waitForDeployment();

  console.log(`Receiver Contract is deployed on ${receiverContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//npx hardhat run scripts/deploy-receiver.ts --network mumbai
