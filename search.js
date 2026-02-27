const contractAddress = "YOUR_CONTRACT"

let provider
let signer

async function connect(){

provider = new ethers.BrowserProvider(window.ethereum)

await provider.send("eth_requestAccounts", [])

signer = await provider.getSigner()

}

document.getElementById("connect").onclick = connect


function search(){

let name = document.getElementById("domain").value

document.getElementById("result").innerHTML =

`
<h3>${name}</h3>
<p>Available</p>
<button onclick="register('${name}')">Register</button>
`

}
