import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

const BalDisp = () => {
    
    const { connection }= useConnection();
    const wallet = useWallet();
    
    async function getUserBalance(){
    const balance = await connection.getBalance(wallet.publicKey);
    document.getElementById("balance").innerHTML = balance/LAMPORTS_PER_SOL
    }

    useEffect(() => {
       getUserBalance()
    }, [wallet])
    
   
    
  return (
    
    <div>
        
       <h1> Solana Balance available: <span id="balance"></span> </h1> 
       
    </div>
  )
}

export default BalDisp