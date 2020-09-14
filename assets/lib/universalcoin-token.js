var jsonURL = "https://ticker.saturn.network/api/v2/tokens/show/etc/0x76d0184cf511788032a74a1fb91146e63f43dd53.json";

// This is the ABI for UniversalCoin on ETC.
// You may need to replace it with your own contract's ABI, depending on what you're BUIDLing!
var abi = [{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"data","type":"bytes"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ERC223Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

// Put your token's contract address in the variable below.
// var tokenAddress = '0x6D5736CeD7c9A712Dd84e787F1534d692E66D7DC'; // Kotti Testnet
var tokenAddress = '0x76d0184cf511788032a74a1fb91146e63f43dd53'; // ETC Mainnet
var tokenContract = web3.eth.contract(abi).at(tokenAddress);

// Set the Decimals and Symbol here - it's important to note, these must match what is set
// in your Smart Contract - otherwise, your Dapp may misbehave.
var decimals = 5;
var symbol = "UVC";

var start = +(new Date());

$(document).ready(function(){
    $.getJSON(jsonURL, function(result){
        $("#bestBuyOrder").text(result.best_buy_order);
        $("#bestBuyPrice").text(result.best_buy_price.substr(0,9));
        $("#bestSellOrder").text(result.best_sell_order);
        $("#bestSellPrice").text(result.best_sell_price.substr(0,9));
        // $("#totalSupply").text(result.total_supply.substr(0,11));
        $("#volume24h").text(result.volume24hr.substr(0,4));
        $("#price24h").text(result.price24hr.substr(0,9));
        $("#currentPrice").text(result.dashboard_price.substr(0,9));
        $("#changePercent").text(result.change_pct.substr(0,3));
    });
});

// "Animate" by changing the text with each animation step.
function showBalance(el, value) {
    $({ number: parseFloat(el.text().replace(/[^\d.]/g, '')) }).animate({number: value}, {
        step: function () {
            el.text(Math.floor(this.number).toLocaleString());
        },
        complete: function () {
            el.text(Math.floor(this.number).toLocaleString());
        },
    });
}

function showTotalSupply(el, value) {
    $({ number: parseFloat(el.text().replace(/[^\d.]/g, '')) }).animate({
        number: value
    },{
        step: function () {
            el.text(Math.floor(this.number).toLocaleString());
        },
        complete: function () {
            el.text(Math.floor(this.number).toLocaleString());
        },
    });
}

// FUNCTION: Update UI (repeat every 1 second).
function updateUI(balance, totalSupply) {
    window.setTimeout(function () {
        updateUI(balance, totalSupply);
    }, 1000);
    
    showBalance($('#tokenBalance'), balance.toNumber());
    showTotalSupply($('#totalSupply'), totalSupply.toNumber());
}

/////////////////////////////////// TRANSFER FUNCTION ///////////////////////////////////
$('#transferForm').submit(function (e) {
    e.preventDefault();
    var numberOfTokens = web3.toBigNumber($('#transferTokenCount').val() + "00000");
    var recipientOfTokens = $('#transferAddress').val();
    
    tokenContract.transfer.sendTransaction(
        recipientOfTokens,
        numberOfTokens, {
            from: web3.eth.accounts[0],
            gas: 150000,
            gasPrice: web3.toWei(1, 'gwei')
        },
        function (error, result) { //get callback from function which is your transaction key
            if (!error) {
                alertify.success("Transferring " + numberOfTokens + symbol + " to " + recipientOfTokens.substring(0, 7) + "...")
                console.log(result);
            } else {
                console.log(error);
            }
        }
    );
});

/////////////////////////////////// BURN FUNCTION ///////////////////////////////////
$('#burnForm').submit(function (e) {
    e.preventDefault();
    var numberOfTokensToBurn = web3.toBigNumber($('#burnTokenCount').val() + "00000");
    
    tokenContract.burn.sendTransaction(
        numberOfTokensToBurn, {
            from: web3.eth.accounts[0],
            gas: 150000,
            gasPrice: web3.toWei(1, 'gwei')
        },
        function (error, result) { //get callback from function which is your transaction key
            if (!error) {
                alertify.success("Burning " + numberOfTokens + " UVC from " + recipientOfTokens.substring(0, 7) + "...")
                console.log(result);
            } else {
                console.log(error);
            }
        }
    );
});

/////////////////////////////////// INITIALIZER ///////////////////////////////////
function initialize() {
    web3.eth.getBlockNumber(function (err, lastSeenBlock) {
        loadData(lastSeenBlock);
        function changeHandler(err, data) {
            if (err) return error(err);
            if (data.blockNumber > lastSeenBlock) {
                lastSeenBlock = data.blockNumber;
                loadData(lastSeenBlock);
            }
        }
        
        // Watch Transfer events to the Contract and from the active wallet.
        tokenContract.Transfer({to: [ tokenAddress, web3.eth.defaultAccount ]}, changeHandler);
        tokenContract.Transfer({from: web3.eth.defaultAccount}, changeHandler);
    });
}

/////////////////////////////////// MAIN FUNCTIONS ///////////////////////////////////
$(function () {
    // If there is no Web3 Provider (IE MetaMask, Saturn Wallet, Nifty Wallet, Trust Wallet),
    // The Dapp will not work correctly.
    //
    // Future enhancement of the error notifications is planned - Pull Requests of working solutions welcome!
    if (typeof(web3) === "undefined") {
        console.log("Cannot find Injected Web3 - Not Connected to Network.");
    } else {
        web3 = new Web3(web3.currentProvider);
        console.log("Found Injected Web3 - Connected to Network.");
        
        // If there's no accounts configured, say so.
        if (web3.eth.defaultAccount === undefined) {
            console.log("No accounts found.");
        } else {
            // Otherwise, Keep Calm and Carry On!
            initialize();
        }
        
        var initialAccount = web3.eth.defaultAccount;
        
        // Check every 5 seconds if the active Wallet has changed.
        // If it has, reload the page.
        window.setInterval(function () {
            if (web3.eth.defaultAccount !== initialAccount) {window.location.reload();}
        }, 5000);
    }
});

// FUNCTION: loadData - Gets information such as balances.
// Takes blockNumber as an argument.
function loadData(blockNumber) {
    console.log("Loading data from contract...")

    var balance;
    var totalSupply;
    
    function updateWhenDone() {
        if (balance !== undefined || totalSupply !== undefined) {
            updateUI(balance.div(10**decimals), totalSupply.div(10**decimals));
            console.log(balance.div(10**decimals), totalSupply.div(10**decimals));
        } else {
            console.log("Error getting Data!")
        }
    }

    // Get the token balance of the wallet currently enabled.
    tokenContract.balanceOf.call(web3.eth.defaultAccount, {}, blockNumber, function (err, _balance) {
        if (err) return error(err);
        balance = _balance;
        updateWhenDone();
    });
    
    tokenContract.totalSupply.call(function (err, _totalSupply) {
       if (err) return error(err);
        totalSupply = _totalSupply;
        updateWhenDone();
    });
}

/////////////////////////////////// LOG FUNCTIONS ///////////////////////////////////
function log(message) {
    $('#log').append($('<p>').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
}

function error(message) {
    $('#log').append($('<p>').addClass('dark-red').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
}

/////////////////////////////////// CAN'T TOUCH THIS ///////////////////////////////////
/////////////////////////////// (Yea, like MC Hammer...) ///////////////////////////////
function waitForReceipt(hash, cb) {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
        if (err) {error(err);}
        if (receipt !== null) {
            if (cb) {cb(receipt);}
        } else {
            window.setTimeout(function () {waitForReceipt(hash, cb);}, 1000);
        }
    });
}