import { ethers } from "ethers";
import SenderConfig from "../artifacts/contracts/Sender.sol/Sender.json";

const contractABI = SenderConfig.abi;
const provider = new ethers.AlchemyProvider(
  "sepolia",
  process.env.SEPOLIA_API_KEY
);

const signer = new ethers.Wallet(process.env.ACCOUNT_PV as string, provider);

const contractInstance = new ethers.Contract(
  "0xee91084c886f31b353af63ac35f8eeb45322a151",
  contractABI,
  signer
);

const sendMessage = async () => {
  const destinationChainSelector = "12532609583862916517";
  const receiver = "0xa5E5Ad5761ac91a05e24C8cA2Fef28Bf15Ca0135";
  const textMessage = "hello";
  const message = await contractInstance.sendMessage(
    destinationChainSelector,
    receiver,
    textMessage,
    {
      gasLimit: "185260",
      gasPrice: "7000000000",
    }
  );
  console.log("this will be the message", message);
  await message.wait();
};

sendMessage();
