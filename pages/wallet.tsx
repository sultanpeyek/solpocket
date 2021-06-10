import Head from "next/head";
import { Connection, PublicKey, BPF_LOADER_PROGRAM_ID } from "@solana/web3.js";

import { useEffect } from "react";

import DataService from "../services/DataService";

import styles from "../styles/Home.module.css";
import { formatAmount } from "../utils/utils";

export default function Wallet({ publicKey: any, tokens: any }) {
  console.log(tokens);
  return (
    <div className={styles.container}>
      <Head>
        <title>SolPocket</title>
        <meta name="description" content="Pocket for Solana token" />
      </Head>

      <main className={styles.main}>
        <p>{publicKey}</p>
        <ul>
          {tokens.map((token, key) => (
            <li key={key}>{formatAmount(token.account.data.parsed.info.tokenAmount.uiAmountString, 4)}</li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>Copyright &copy; 2021 All rights reserved</footer>
    </div>
  );
}

Wallet.getInitialProps = async (ctx) => {
  // Establish connection
  let connection: Connection;
  const rpcUrl = "https://api.mainnet-beta.solana.com";
  connection = new Connection(rpcUrl, "confirmed");
  const version = await connection.getVersion();
  console.log("Connection to cluster established:", rpcUrl, version);

  // Get Token by Owner
  let publicKey: PublicKey;
  publicKey = new PublicKey(ctx.query.key);
  let programId: PublicKey;
  programId = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

  const tokens = await connection.getParsedTokenAccountsByOwner(publicKey, { programId });

  return { publicKey: publicKey.toString(), tokens: tokens.value };
};
