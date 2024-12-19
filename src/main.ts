import { connectToServer } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input id="jw-token" placeholder="Json Web Token" />
    <button id="btn-connect">Connect</button>
    <br />
    <span id="server-status">Offline</span>

    <ul id="clients-ul">

    </ul>

    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>

  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// connectToServer();

const jwToken = document.querySelector<HTMLInputElement>("#jw-token")!;
const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnConnect.addEventListener("click", () => {
  if (jwToken.value.trim().length <= 0) return alert("Enter a valid JWT");
  connectToServer(jwToken.value.trim());
});
