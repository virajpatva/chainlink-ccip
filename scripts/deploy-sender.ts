import { ethers } from "hardhat";

async function main() {
  const SEPOLIA_ROUTER = "0xD0daae2231E9CB96b94C8512223533293C3693Bf";
  const SEPOLIA_LINK = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
  const senderContract = await ethers.deployContract(
    "Sender",
    [SEPOLIA_ROUTER, SEPOLIA_LINK],
    {}
  );

  await senderContract.waitForDeployment();

  console.log(`Sender Contract is deployed on ${senderContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//npx hardhat run scripts/deploy-sender.ts --network sepolia
