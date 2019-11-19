import Web3 from "web3";
import Adoption from "./contracts/Adoption.json";

const options = {
  web3: {
    customProvider: new Web3("ws://localhost:9545")
  },
  contracts: [Adoption]
};

export default options;
