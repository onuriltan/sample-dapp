import { useState } from "react";
import { ethers } from "ethers";
import GreeterContract from "./artifacts/contracts/Greeter.sol/Greeter.json";
import TokenContract from "./artifacts/contracts/Token.sol/Token.json";

// These will be different in your local env
const greeterContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";


const App = () => {
  const [greeting, setGreetingValue] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [amount, setAmount] = useState(0);
  // will connect to metamask wallet
  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const getBalance = async () => {
    if (typeof window.ethereum !== "undefined") {
      const [account] = await window.ethereum.request({method: 'eth_requestAccounts'})
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        tokenAddress,
        TokenContract.abi,
        provider
      );
      const balance = await contract.balanceOf(account)
      console.log('Balance: ' + balance.toString())
    }
  }

  const sendCoins = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        tokenAddress,
        TokenContract.abi,
        signer
      );
      const transaction = await contract.transfer(userAccount, amount)
      await transaction.wait()
      console.log(`${amount} Coins successfully sent to ${userAccount}`)
    }

  }

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
      <br />
      <button onClick={getBalance}> Get Balance </button>
      <button onClick={sendCoins}> Send Coins </button>
      <input
        onChange={(e) => setUserAccount(e.target.value)}
        placeholder="Account Id"
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      </div>
  );
};

export default App;
