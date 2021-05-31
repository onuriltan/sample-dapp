import { useState } from "react";
import { ethers } from "ethers";
import GreeterContract from "./artifacts/contracts/Greeter.sol/Greeter.json";

// This will be different in your local env
const greeterContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

const App = () => {
  const [greeting, setGreetingValue] = useState('');

  // will connect to metamask wallet
  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const fetchGreeting = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterContractAddress,
        GreeterContract.abi,
        provider
      );
      try {
        const data = await contract.greet(); // value from blockchain
        console.log("Data: " + data);
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  };

  const setGreeting = async () => {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        greeterContractAddress,
        GreeterContract.abi,
        signer
      );
      const transaction = await contract.setGreeting(greeting);
      setGreetingValue("");
      await transaction.wait();
      fetchGreeting();
    }
  };

  return (
    <div className="App">
      <button onClick={fetchGreeting}>Fetch Greeting</button>
      <button onClick={setGreeting}>Set Greeting </button>
      <input
        onChange={(e) => setGreetingValue(e.target.value)}
        value={greeting}
        placeholder="Set Greeting"
      />
    </div>
  );
};

export default App;
