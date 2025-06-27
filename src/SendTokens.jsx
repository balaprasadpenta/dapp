import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
// import { useEffect } from "react";


const SendTokens = () => {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTok(){
        let to = document.getElementById("to").value
        let amount = document.getElementById("amount").value
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection)
        alert("token is sent")
    }

    // useEffect(() => {

    // sendTok()

    // },[wallet])
    
  return (
    <div>
        <input type="text" id="to" placeholder="To" />
        <input type="text" id="amount" placeholder="Amount" />
        <button onClick={sendTok}>Send Token</button>
    </div>
  )
}

export default SendTokens