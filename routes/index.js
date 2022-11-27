import { getNewAddress } from "../lib/rpc.js"

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
}

export async function get({params, request}) {
    var address = await getNewAddress()
    if(address.error != null) {
        return {
            status: 500,
            headers,
            body: {
                error: 'A server error occured'
            }
        }
    } else {
        return {
            status: 200,
            headers,
            body: {
                address: address.res
            }
        }
    }
}