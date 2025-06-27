import { useWallet } from "@solana/wallet-adapter-react"
import { ed25519 } from '@noble/curves/ed25519'
import bs58 from 'bs58'

const SignMessage = () => {
    const {publicKey, signMessage} = useWallet()

    async function SigningMessage(){
        if(!publicKey) throw new Error("wallet not connected")
        if(!signMessage) throw new Error("Wallet doesnot support message signing")

        const message = document.getElementById("message").value
        const encodedMessage = new TextEncoder().encode(message)
        const signature = await signMessage(encodedMessage)

        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message signature invalid")
            alert("success" );
        console.log(`Message signature ${bs58.encode(signature)}`)
    }

  return (
    <div>
        <input type="text" placeholder="message" id="message" />
        <button onClick={SigningMessage}>Sign Message</button>
    </div>
  )
}

export default SignMessage