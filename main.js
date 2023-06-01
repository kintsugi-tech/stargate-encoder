import { fromBase64, toAscii, toBase64 } from '@cosmjs/encoding'

import {MsgDelegate} from 'cosmjs-types/cosmos/staking/v1beta1/tx.js'

const main = async () => {

    const delegate = MsgDelegate.encode(MsgDelegate.fromPartial({
        delegatorAddress: "juno190g5j8aszqhvtg7cprmev8xcxs6csra7xnk3n3",
        validatorAddress: "junovaloper1juczud9nep06t0khghvm643hf9usw45r23gsmr",
        amount: {
            denom: "ujuno",
            amount: "1000000"
        }
    })).finish()

    console.log(toBase64(Uint8Array.from(delegate)));
}

main();