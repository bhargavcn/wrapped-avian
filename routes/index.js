import { getNewAddress } from "../lib/rpc.js"

export async function get({params, request}) {
    var address = await getNewAddress()
    if(address.error != null) {
        return {
            status: 500,
            body: {
                error: 'A server error occured'
            }
        }
    } else {
        return {
            status: 200,
            body: {
                address: address.res
            }
        }
    }
}