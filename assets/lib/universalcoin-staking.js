var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Collect","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Unfreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"Whitelist","type":"event"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"allInfoFor","outputs":[{"internalType":"uint256","name":"totalTokenSupply","type":"uint256"},{"internalType":"uint256","name":"totalTokensFrozen","type":"uint256"},{"internalType":"uint256","name":"userBalance","type":"uint256"},{"internalType":"uint256","name":"userFrozen","type":"uint256"},{"internalType":"uint256","name":"userDividends","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_receivers","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"bulkTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"dividendsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"freeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"frozenOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFrozen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"unfreeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"}];

var address = '0xd6dF0C579f2A65049a893fDaEC9fCE098CC19F87';
var FNB = web3.eth.contract(abi).at(address);

function init() {
	if (window.ethereum !== undefined) {window.ethereum.enable();}

	$('#freezeToggle .nav-link').click(function() {
		$('#freezeToggle .nav-link').removeClass('active');
		$(this).addClass('active');
		var toggle = $(this).attr('toggle');
		$('.freeze, .unfreeze').hide();
		$('.' + toggle).show();
	});

	$('#transfer').click(function() {
		var amount = parseFloat($('#transferAmount').val());
		var to = $('#transferReceiver').val();
		if (amount > 0 && to.length == 42) {FNB.transfer(to, web3.toWei(amount, 'ether'), function(error, hash) {if (!error) {console.log(hash);} else {console.log(error);}});}
	});

	$('#freeze').click(function() {
		var amount = parseFloat($('#freezeAmount').val());
		if (amount > 0) {FNB.freeze(web3.toWei(amount, 'ether'), function(error, hash) {if (!error) {console.log(hash);} else {console.log(error);}});}
	});

	$('#unfreeze').click(function() {
		var amount = parseFloat($('#unfreezeAmount').val());
		if (amount > 0) {FNB.unfreeze(web3.toWei(amount, 'ether'), function(error, hash) {if (!error) {console.log(hash);} else {console.log(error);}});}
	});

	$('#withdraw').click(function() {FNB.collect(function(error, hash) {if (!error) {console.log(hash);} else {console.log(error);}});});
	var filter = web3.eth.filter('latest');
	filter.watch(function(error, result) {update();});
	setTimeout(update, 500);
}

function update() {
    var account =
        web3.eth.accounts !== undefined && web3.eth.accounts[0] !== undefined
            ? web3.eth.accounts[0]
            : '0x0000000000000000000000000000000000000001';
    FNB.allInfoFor.call(account, function(error, info) {
        if (!error) {
            console.log(info);
            $('#totalSupply').text(formatNumber(parseFloat(web3.fromWei(info[0], 'ether')), 5));
            $('#totalFrozen').text(formatNumber(parseFloat(web3.fromWei(info[1], 'ether')), 5));
            $('#myTokens').text(formatNumber(parseFloat(web3.fromWei(info[2], 'ether')), 5));
            $('#myFrozen').text(formatNumber(parseFloat(web3.fromWei(info[3], 'ether')), 5));
            $('#myDividends').text(formatNumber(parseFloat(web3.fromWei(info[4], 'ether')), 5));
            $('#withdrawAmount').text(formatNumber(parseFloat(web3.fromWei(info[4], 'ether')), 5));
        } else {
            console.log(error);
        }
    });
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
$(document).ready(init);