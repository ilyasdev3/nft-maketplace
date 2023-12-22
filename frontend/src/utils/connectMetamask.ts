import Web3 from "web3";

const connectMetamask = async () => {
  const windowProvider = (window as any).ethereum;
  const web3 = new Web3(windowProvider);
  await windowProvider.enable();
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  console.log("account", account);

  return account;
};

export default connectMetamask;
