import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

const Airdrop = () => {
    const wallet = useWallet()
    const {connection} = useConnection()

    async function sendAirdropToUser() {
      const amount = document.getElementById("amount").value
      await connection.requestAirdrop(wallet.publicKey, amount*LAMPORTS_PER_SOL)
      alert("sol air dropper to user")
    }
    
  return (
    <div>
        {/* hi mrs {wallet.publicKey.toString()} <br /> */}
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={sendAirdropToUser}>send Airdrop</button>

    </div>
  )
}

export default Airdrop