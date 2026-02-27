async function register(name){

const contract = new ethers.Contract(
contractAddress,
abi,
signer
)

await contract.register(name,{
value: ethers.parseEther("0.01")
})

alert("Domain registered")

}
