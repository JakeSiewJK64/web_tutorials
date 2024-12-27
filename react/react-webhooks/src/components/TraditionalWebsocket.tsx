import { useRef, useState, useEffect } from "react";
import { SocketResponse, OPERATION, SOCKET_URL } from "../@types/response";
import { ReadyState } from "react-use-websocket";

export const TraditionalWebsocket = () => {
  const websocket = useRef<null | WebSocket>(null);
  const [response, setResponse] = useState<SocketResponse[]>([]);

  const handleWebSocketMessage = (event: MessageEvent) => {
    const message = JSON.parse(event.data);
    setResponse((prev) => [...prev, message]);
  };

  useEffect(() => {
    const socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => console.log("connected");
    socket.onclose = () => console.log("closed");
    socket.onerror = () => console.log("error occurred");
    socket.onmessage = handleWebSocketMessage;

    websocket.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const sendJSONMessage = (operation: { op: string }) => {
    if (websocket.current) {
      websocket.current.send(JSON.stringify(operation));
    }
  };
  const readyState = websocket.current?.readyState ?? 0;
  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

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
            sendJSONMessage(OPERATION["subscribe_unconfirmed"]);
          }}
        >
          Subscribe Unconfirmed
        </button>
        <button
          onClick={() => {
            sendJSONMessage(OPERATION["unsubscribe_unconfirmed"]);
          }}
        >
          Unsubscribe Unconfirmed
        </button>
        <button
          onClick={() => {
            sendJSONMessage(OPERATION["subscribe"]);
          }}
        >
          Subscribe
        </button>
        <button
          onClick={() => {
            sendJSONMessage(OPERATION["unsubscribe"]);
          }}
        >
          Unsubscribe
        </button>
        <button
          onClick={() => {
            sendJSONMessage(OPERATION["ping"]);
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
      <div>Status: {connectionStatus}</div>
      <div>Total Captured: {response.length}</div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          overflowY: "scroll",
          height: "50rem",
        }}
      >
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
                  <p>time: {item.x.time}</p>
                  <p>lock time: {item.x.lock_time}</p>
                  <p>version: {item.x.ver}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
