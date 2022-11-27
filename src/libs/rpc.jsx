export default function rpc() {
let peer_rpc = require("node-bitcoin-rpc");
let host = process.env.REACT_APP_HOST;
let port = process.env.REACT_APP_PORT;
let user = process.env.REACT_APP_USERNAME;
let pass = process.env.REACT_APP_PASSWORD;

return new Promise((resolve, reject) => {
    peer_rpc.init(host, port, user, pass);
peer_rpc.setTimeout(30000);

peer_rpc.call('getnewaddress', ['jun'], (err, res) => {
if (err !== null) {
    console.log(err)
} else {
console.log(res);  

}
});
});
}

