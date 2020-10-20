var uvcContractAddress  = "0x76d0184cf511788032a74a1fb91146e63f43dd53";
var uvcxContractAddress = "0xd6df0c579f2a65049a893fdaec9fce098cc19f87";
var strnContractAddress = "0xac55641cbb734bdf6510d1bbd62e240c2409040f";

var tokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

var stakingABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Collect","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Unfreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"Whitelist","type":"event"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"allInfoFor","outputs":[{"internalType":"uint256","name":"totalTokenSupply","type":"uint256"},{"internalType":"uint256","name":"totalTokensFrozen","type":"uint256"},{"internalType":"uint256","name":"userBalance","type":"uint256"},{"internalType":"uint256","name":"userFrozen","type":"uint256"},{"internalType":"uint256","name":"userDividends","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_receivers","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"bulkTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"dividendsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"freeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"frozenOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFrozen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"unfreeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"}];

var account;

var tokenName;
var tokenDecimals;
var tokenContract;
var tokenSupply;
var tokenImagePath;

var UVC  = web3.eth.contract(tokenABI).at(uvcContractAddress);
var UVCX = web3.eth.contract(tokenABI).at(uvcxContractAddress);
var UVCXStaking = web3.eth.contract(stakingABI).at(uvcxContractAddress);
var STRN = web3.eth.contract(tokenABI).at(strnContractAddress);

$(document).ready(init);

function init() {
	if (window.ethereum !== undefined) {window.ethereum.enable();}
    if (web3.eth.accounts !== undefined) {if (web3.eth.accounts[0] !== undefined) {var account = web3.eth.accounts[0];}}
    
    var filter = web3.eth.filter('latest');
    filter.watch(function(error, result) {update();});
	setTimeout(update, 500);
}

function update() {
    getStakingData();
    update();
}

function getStakingData() {
	var filter = web3.eth.filter('latest');
	filter.watch(function(error, result) {update();});
	setTimeout(update, 500);
}

$('#transfer').click(function() {
		var amount = parseFloat($('#transferAmount').val());
		var to = $('#transferReceiver').val();
		if (amount > 0 && to.length == 42) {
            UVCXStaking.transfer(to, web3.toWei(amount, 'ether'), function(error, hash) {
                if (!error) {
                    console.log(hash);
                    alertify.success("Transferring " + amount + " UVCX...")
                } else {
                    console.log(error);
                    alertify.error("Transfer Failed!")
                }
            });
        }
	});

	$('#freeze').click(function() {
		var amount = parseFloat($('#freezeAmount').val());
		if (amount > 0) {
            UVCXStaking.freeze(web3.toWei(amount, 'ether'), function(error, hash) {
                if (!error) {
                    console.log(hash);
                    alertify.success("Staking " + amount + " UVCX...")
                } else {
                    console.log(error);
                    alertify.error("Staking Failed!")
                }
            });
        }
	});

    $('#freezemax').click(function() {
        var wholeStake;
        
        UVCX.balanceOf.call(web3.eth.accounts[0], function(error, info) {
            if (!error) {
                wholeStake = info;
                if (wholeStake > 0) {
                    UVCXStaking.freeze(wholeStake, function(error, hash) {
                        if (!error) {
                            console.log(hash);
                            alertify.success("Staking all your UVCX...")
                        } else {
                            console.log(error);
                            alertify.error("Staking Failed!")
                        }
                    })
                } else {
                    alertify.error("No UVCX to Stake!");
                }
            } else {
                console.log(error); 
            }
        });
        
        
	});

	$('#unfreeze').click(function() {
		var amount = parseFloat($('#unfreezeAmount').val());
		if (amount > 0) {
            UVCXStaking.unfreeze(web3.toWei(amount, 'ether'), function(error, hash) {
                if (!error) {
                    console.log(hash);
                    alertify.success("Unstaking " + amount + " UVCX...")
                } else {
                    console.log(error);
                    alertify.error("Unstaking Failed!")
                }
            });
        }
	});

    $('#unfreezemax').click(function() {
        var wholeUnstake;
        
		UVCXStaking.frozenOf.call(web3.eth.accounts[0], function(error, info) {
            if (!error) {
                wholeUnstake = info;
                if (wholeUnstake > 0) {
                    UVCXStaking.unfreeze(wholeUnstake, function(error, hash) {
                        if (!error) {
                            console.log(hash);
                            alertify.success("Unstaking your UVCX...")
                        } else {
                            console.log(error);
                            alertify.error("Unstaking Failed!")
                        }
                    })
                } else {
                    alertify.error("No UVCX Staked!")
                }
            } else {
                console.log(error);
            } 
        })
        
        
    });

	$('#withdraw').click(function() {
        UVCXStaking.collect(function(error, hash) {
            if (!error) {
                console.log(hash);
                alertify.success("Withdrawing Earnings...")
            } else {
                console.log(error);
                alertify.error("Withdraw Failed!")
            }
        });
    });

function update() {
    var account = web3.eth.accounts !== undefined && web3.eth.accounts[0] !== undefined ? web3.eth.accounts[0] : '0x0000000000000000000000000000000000000001';
    UVCXStaking.allInfoFor.call(account, function(error, info) {
        if (!error) {
            console.log(info);
            $('#totalSupply').text(numberWithCommas(web3.fromWei(info[0]).toFixed(0)));
            $('#totalFrozen').text(numberWithCommas(web3.fromWei(info[1]).toFixed(0)));
            $('#myTokens').text(numberWithCommas(web3.fromWei(info[2]).toFixed(0)));
            $('#myFrozen').text(numberWithCommas(web3.fromWei(info[3]).toFixed(0)));
            $('#myDividends').text(numberWithCommas(web3.fromWei(info[4]).toFixed(0)));
            $('#withdrawAmount').text(numberWithCommas(web3.fromWei(info[4]).toFixed(0)));
        } else {
            console.log(error);
        }
    });
    
    UVC.balanceOf.call(web3.eth.accounts[0], function(error, info) {
        if (!error) {
            var uvcBalanceDisplay = (info / 10**5);
            console.log(info);
            $('.uvcBalance').text(numberWithCommas(Math.floor(uvcBalanceDisplay)));
        } else {
            console.log(error);
        }
    });
    
    UVCX.balanceOf.call(web3.eth.accounts[0], function(error, info) {
        if (!error) {
            var uvcxBalanceDisplay = (info / 10**18);
            console.log(info);
            $('.uvcxBalance').text(numberWithCommas(Math.floor(uvcxBalanceDisplay)));
        } else {
            console.log(error);
        }
    });
    
    STRN.balanceOf.call(web3.eth.accounts[0], function(error, info) {
        if (!error) {
            var strnBalanceDisplay = (info / 10**4);
            console.log(info);
            $('.strnBalance').text(numberWithCommas(Math.floor(strnBalanceDisplay)));
        } else {
            console.log(error);
        }
    });
}

function numberWithCommas(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

function log10(val) {return Math.log(val) / Math.log(10);}

function formatNumber(n, maxDecimals) {
	var zeroes = Math.floor(log10(Math.abs(n)));
	var postfix = '';
	if (zeroes >= 9) {
		postfix = 'B';
		n /= 1e9;
		zeroes -= 9;
	} else if (zeroes >= 6) {
		postfix = 'M';
		n /= 1e6;
		zeroes -= 6;
	}

	zeroes = Math.min(maxDecimals, maxDecimals - zeroes);
	return (n.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: Math.max(zeroes, 0)}) + postfix);
}

function showTokenModal(token) {
    var tokenName;
    var tokenSymbol;
    var tokenContract;
    var tokenImagePath;
    
    if (token == UVC) {
        tokenName = "UniversalCoin";
        tokenSymbol = "UVC";
        tokenContract = "0x76d0184cf511788032a74a1fb91146e63f43dd53";
        tokenImagePath = "https://github.saturn.network/etc/logo/UVC.png";
        console.log("UVC is Set");
    }
    
    if (token == UVCX) {
        tokenName = "UniversalCoin X";
        tokenSymbol = "UVCX";
        tokenContract = "0xd6df0c579f2a65049a893fdaec9fce098cc19f87";
        tokenImagePath = "https://github.saturn.network/etc/logo/UVCX.png";
        console.log("UVCX is Set");
    }
    
    if (token == STRN) {
        tokenName = "Saturn Classic DAO Token";
        tokenSymbol = "STRN";
        tokenContract = "0xac55641cbb734bdf6510d1bbd62e240c2409040f";
        tokenImagePath = "https://github.saturn.network/etc/logo/saturn.png";
        console.log("STRN is Set");
    }
    
    $('#tokenIcon').replaceWith("<img src='"+tokenImagePath+"' id='tokenIcon' width='25px' height='25px' />");
    
    $('#tokenTradeLink').replaceWith("<a href='https://www.saturn.network/token/ETC/" + tokenContract + "' class='btn btn-block btn-md btn-success roundedCorners' id='tokenTradeLink'>Trade "+tokenSymbol+"</a>");
    $('#tokenContractLink').replaceWith("<a href='https://blockscout.com/etc/mainnet/address/" + tokenContract + "' class='btn btn-block btn-md btn-warning roundedCorners' id='tokenContractLink'>View Contract</a>");
    console.log(tokenImagePath);
    $('#tokenSymbol').text(tokenSymbol);

    var xDecimals;
    var xBalance;
    var xSupply;
    
    token.decimals.call(function(error, decimals) {
        if (!error) {
            xDecimals = decimals;
            
            token.balanceOf.call(web3.eth.accounts[0], function(error, balances) {
                if (!error) {
                    xBalance = (balances / 10**xDecimals);
                    $('#tokenBalance').text(numberWithCommas(xBalance.toFixed(0)));
                    console.log(balances);
                } else {
                    console.log(error);
                }
            });
    
            token.totalSupply.call(function(error, supply) {
                if(!error) {
                    xSupply = (supply / 10**xDecimals);
                    console.log("Total Supply is " + xSupply + " " + tokenSymbol);
                } else {
                    console.log(error);
                }
            });
        } else {
            console.log(error);
        }
    });
}
