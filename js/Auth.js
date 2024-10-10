import { ethers } from "ethers";

async function generateKeyPairFromGoogleSignIn(googleToken) {
  const wallet = ethers.Wallet.createRandom(); 
  
  const privateKey = wallet.privateKey;
  const publicKey = wallet.publicKey;
  const address = ethers.utils.getAddress(wallet.address);

  return {
    privateKey: privateKey, 
    publicKey: publicKey,   
    address: address       
  };
}

async function onGoogleSignIn(googleToken) {
  const keyPair = await generateKeyPairFromGoogleSignIn(googleToken);
  console.log("Generated Ethereum Key-Pair:");
  console.log("Private Key: ", keyPair.privateKey);
  console.log("Public Key: ", keyPair.publicKey);
  console.log("Ethereum Address: ", keyPair.address);
}

const googleToken = "user_google_oauth_token_here"; 
onGoogleSignIn(googleToken);