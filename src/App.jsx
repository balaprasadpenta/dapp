
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import Airdrop from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import BalDisp from './BalDisp';
import SendTokens from './SendTokens';
import SignMessage from './SignMessage';

function App() {

  // const network = WalletAdapterNetwork.Devnet;

  // const endpoint = "https://api.devnet.solana.com"

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/izkc0HGphB3C_I8b0DQDW4JTuCQkRX4P"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>

          <div>
            Hi there
          </div>
          <Airdrop />
          {/* <BalDisp /> */}
          <SendTokens />
          <SignMessage />

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
