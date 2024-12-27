import { useEffect, useRef, useState } from "react";

const SOCKET_URL = "wss://ws.blockchain.info/inv";

type SocketResponse = {
  op: string;
  x: {
    totalBTCSent: number;
    reward: number;
    size: number;
    hash: string;
    time: string;
    bits: string;
    nonce: string;
  } | null;
};

const OPERATION = {
  subscribe_unconfirmed: { op: "unconfirmed_sub" },
  unsubscribe_unconfirmed: { op: "unconfirmed_unsub" },
  ping: { op: "ping" },
  subscribe: { op: "blocks_sub" },
  unsubscribe: { op: "blocks_unsub" },
};

const App = () => {
  const websocket = useRef<null | WebSocket>(null);
  const [response, setResponse] = useState<SocketResponse[]>([]);

  useEffect(() => {
    const socket = new WebSocket(SOCKET_URL);
    socket.onopen = () => console.log("connected");
    socket.onclose = () => console.log("closed");
    socket.onerror = () => console.log("error occured");

    websocket.current = socket;
  }, []);

  useEffect(() => {
    const socket = websocket.current;

    if (socket) {
      socket.onmessage = (e) => {
        const message = JSON.parse(e.data);
        const responses = [...response, message];
        setResponse(responses);
      };
    }
  }, [response]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button
          onClick={() => {
            websocket.current?.send(
              JSON.stringify(OPERATION["subscribe_unconfirmed"])
            );
          }}
        >
          Subscribe Unconfirmed
        </button>
        <button
          onClick={() => {
            websocket.current?.send(
              JSON.stringify(OPERATION["unsubscribe_unconfirmed"])
            );
          }}
        >
          Unsubscribe Unconfirmed
        </button>
        <button
          onClick={() => {
            websocket.current?.send(JSON.stringify(OPERATION["subscribe"]));
          }}
        >
          Subscribe
        </button>
        <button
          onClick={() => {
            websocket.current?.send(JSON.stringify(OPERATION["unsubscribe"]));
          }}
        >
          Unsubscribe
        </button>
        <button
          onClick={() => {
            websocket.current?.send(JSON.stringify(OPERATION["ping"]));
          }}
        >
          Ping Server
        </button>
        <button
          onClick={() => {
            setResponse([]);
          }}
        >
          Clear
        </button>
      </div>
      <div>Total Captured: {response.length}</div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        {(response ?? []).map((item) => {
          return (
            <div
              style={{
                backgroundColor: "lightgray",
                width: "35rem",
                borderRadius: "10px",
                padding: ".15rem",
                marginBottom: "10px",
              }}
            >
              <p>op: {item.op}</p>
              {item.x && (
                <>
                  <p>total btc sent: {item.x.totalBTCSent}</p>
                  <p>size: {item.x.size}</p>
                  <p>hash: {item.x.hash}</p>
                  <p>reward: {item.x.reward}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
