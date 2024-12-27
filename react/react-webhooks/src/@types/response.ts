export type SocketResponse = {
  op: string;
  relayed_by: string;
  time: string;
  size: number;
  hash: string;
  x: {
    lock_time: number;
    ver: number;
    out: {
      spent: boolean;
      addr: string;
      value: string;
      tx_index: string;
      script: string;
      type: number;
      n: number;
    };
    totalBTCSent: number;
    reward: number;
    size: number;
    hash: string;
    time: string;
    bits: string;
    nonce: string;
  } | null;
};

export const OPERATION = {
  subscribe_unconfirmed: { op: "unconfirmed_sub" },
  unsubscribe_unconfirmed: { op: "unconfirmed_unsub" },
  ping: { op: "ping" },
  subscribe: { op: "blocks_sub" },
  unsubscribe: { op: "blocks_unsub" },
};

export const SOCKET_URL = "wss://ws.blockchain.info/inv";
