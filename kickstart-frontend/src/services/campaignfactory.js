import initWeb3 from "./web3";
import {abi} from "../build/CampaignFactory.json";


const CONTRACT_ID = process.env.REACT_APP_CONTRACT_ID || '0x1015D472c72141357090D0C059aaAF0662F7D3b4';


export default async function factory(){
    const web3 = await initWeb3();
    let factory = await new web3.eth.Contract(
            abi,
            CONTRACT_ID,
        );
    return factory;
}