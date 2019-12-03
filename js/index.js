var contractAddress = "0x985E2dc8deb8886Ae0e589B89A71ECF4c1f83BBa";
var provider = new ethers.providers.Web3Provider(web3.currentProvider);
var signer = provider.getSigner();
var contract = new ethers.Contract(contractAddress, contractAbi, signer);

btnNomeVendedor.onclick = function(){
    alert('oi');
    //var boxBalance = document.getElementById("boxBalance");
    // contract.nomeVendedor()
    // .then((resultFromContract) => {
    //     alert('Funcionou');
    //     console.log("nomeVendedor - result is", resultFromContract);
    //    // boxBalance.innerHTML = resultFromContract;
    // })
    // .catch( (err) => {
    //     console.error(err);
    //     alert(" ");
    //     ethereum.enable();
    //     alert("After you give the permission we are going to reload the page");
    //     document.location = "index.html";
    // });  
// contract.nomeVendedor().call().then((result) => {
//     alert('');
//     console.log(result);
// }).catch((err) => {
//     alert('');
//     console.log(err);
// });
try{
        contract.nomeVendedor()
        .then(function(err, nome) {
            alert('');
            console.log(nome);
        }).catch((err) => {
            alert('err: ' + err);
            console.log(err);
        });

} catch(err){
    alert(err)
}
alert('nome');

    // contract.nomeVendedor.call(function(err, res){
    //     alert(res);
    //     document.getElementById('nomeVendedor').innerText = res;
    // });    
    alert('fim');
};
