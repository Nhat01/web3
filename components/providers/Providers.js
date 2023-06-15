"use client";

import {
   ThirdwebProvider,
   coinbaseWallet,
   metamaskWallet,
   walletConnect,
} from "@thirdweb-dev/react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { Sepolia } from "@thirdweb-dev/chains";

const Providers = ({ children }) => {
   const client = new ApolloClient({
      uri: "https://api.studio.thegraph.com/query/47856/nft/version/latest",
      cache: new InMemoryCache(),
   });
   return (
      <ThirdwebProvider
         supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
         ]}
         activeChain={Sepolia}
      >
         <ApolloProvider client={client}>{children}</ApolloProvider>
      </ThirdwebProvider>
   );
};

export default Providers;
