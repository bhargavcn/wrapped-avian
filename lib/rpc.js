import * as rpc from 'node-bitcoin-rpc'
rpc.init('127.0.0.1', 9000, 'peer', 'avian')

export function getNewAddress() {
    return new Promise(resolve => {
        rpc.call('getnewaddress', [], (err, res) => {
            if (err != null) {
                resolve({
                    error: `A server error occured: ${err} ${res}`
                })
            } else {
                resolve({
                    res: res.result
                })
            }
        })
    });
}