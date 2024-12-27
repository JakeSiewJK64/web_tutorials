import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect, useState } from "react";
import { SocketResponse, SOCKET_URL, OPERATION } from "../@types/response";

export const UseWebsocket = () => {
  const [response, setResponse] = useState<SocketResponse[]>([]);
  const [isAcceptingResponse, setIsAcceptingResponse] = useState(false);
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    SOCKET_URL,
    {},
    isAcceptingResponse
  );
  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    if (lastJsonMessage !== null) {
      const res = lastJsonMessage as SocketResponse;

      if (res) {
        setResponse((old) => [...old, res]);
      }
    }
  }, [lastJsonMessage]);

  return (
    <div
      style={{
        border: "solid black 1px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button
          onClick={() => {
            sendJsonMessage(OPERATION["subscribe_unconfirmed"]);
            setIsAcceptingResponse(true);
          }}
        >
          Subscribe Unconfirmed
        </button>
        <button
          onClick={() => {
            sendJsonMessage(OPERATION["unsubscribe_unconfirmed"]);
            setIsAcceptingResponse(false);
          }}
        >
          Unsubscribe Unconfirmed
        </button>
        <button onClick={() => {}}>Ping Server</button>
        <button
          onClick={() => {
            setResponse([]);
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            setIsAcceptingResponse(true);
          }}
        >
          Connect
        </button>
        <button
          onClick={() => {
            setIsAcceptingResponse(false);
          }}
        >
          Disconnect
        </button>
      </div>
      <div>Status: {connectionStatus}</div>
      <div>Total Captured: {response.length}</div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        {(response ?? []).map((res) => {
          return (
            <div
              key={res.hash}
              style={{
                backgroundColor: "lightgray",
                width: "35rem",
                borderRadius: "10px",
                padding: ".15rem",
                marginBottom: "10px",
              }}
            >
              <span>op: {res.op}</span>
              {res.x && (
                <>
                  <p>total btc sent: {res.x.totalBTCSent}</p>
                  <p>size: {res.x.size}</p>
                  <p>hash: {res.x.hash}</p>
                  <p>reward: {res.x.reward}</p>
                  <p>time: {res.x.time}</p>
                  <p>lock time: {res.x.lock_time}</p>
                  <p>version: {res.x.ver}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
