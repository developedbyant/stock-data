import fetch from "node-fetch";
import { existsSync,readFileSync } from "fs"
const API_BASE = 'https://query1.finance.yahoo.com/v7/finance'
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
 
/** Make htpp get request */
export async function $get(path:string,returnString:boolean=false):Promise<false|any> {
    const headers={ "User-Agent":USER_AGENT }
    const apiReq = await fetch(returnString ? path : API_BASE+path,{headers})
    if(apiReq.status!==200) return false
    if(returnString) return apiReq.text()
    else return apiReq.json()
}

/** Auto load .env variables */
export function autoEnv(){
    const CWD = process.cwd()
    const ENV_PATH = `${CWD}/.env`
    const envExists = existsSync(ENV_PATH)
    // Check if .env exists
    if(envExists){
        const envData = readFileSync(ENV_PATH).toString()
        for(let lineData of envData.split('\n')){
            lineData = lineData.trim()
            // Check if line is of comment
            if(!lineData.startsWith('#')){
                // Get key and value
                let [key, value] = lineData.split('=')
                // Clean key and value if needed
                if((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1,-1)
                process.env[key.trim()] = value.trim()
            }
        }
    }
}