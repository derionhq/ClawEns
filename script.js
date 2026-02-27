let provider;
let signer;

async function connectWallet(){

if(window.ethereum){

provider = new ethers.BrowserProvider(window.ethereum)

await provider.send("eth_requestAccounts", [])

signer = await provider.getSigner()

alert("Wallet Connected")

}

}

function checkDomain(){

let name = document.getElementById("domain").value

if(name.endsWith(".claw")){

document.getElementById("result").innerHTML =
name + " is available"

}else{

document.getElementById("result").innerHTML =
"Use .claw domain"

}

}
