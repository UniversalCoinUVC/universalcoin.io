var uvcJSONURL  = "https://ticker.saturn.network/api/v2/tokens/show/etc/0xf71c38Cb53478b2Aa7b06F1116b8b7121dF2dED4.json";
var uvcxJSONURL = "https://ticker.saturn.network/api/v2/tokens/show/etc/0xd6dF0C579f2A65049a893fDaEC9fCE098CC19F87.json";

$(document).ready(function(){
    $.getJSON(uvcJSONURL, function(result){
        $("#bestUVCBuyOrder").text(result.best_buy_order);
        $("#bestUVCBuyPrice").text(result.best_buy_price.substr(0,9));
        $("#bestUVCSellOrder").text(result.best_sell_order);
        $("#bestUVCSellPrice").text(result.best_sell_price.substr(0,9));
        $("#totalUVCSupply").text(result.total_supply);
        $("#volumeUVC24h").text(result.volume24hr.substr(0,4));
        $("#priceUVC24h").text(result.price24hr.substr(0,9));
        $("#currentUVCPrice").text(result.dashboard_price.substr(0,9));
        $("#changeUVCPercent").text(result.change_pct.substr(0,3));
    });
    
    $.getJSON(uvcxJSONURL, function(result){
        $("#bestUVCXBuyOrder").text(result.best_buy_order);
        $("#bestUVCXBuyPrice").text(result.best_buy_price.substr(0,9));
        $("#bestUVCXSellOrder").text(result.best_sell_order);
        $("#bestUVCXSellPrice").text(result.best_sell_price.substr(0,9));
        $("#totalUVCXSupply").text(result.total_supply);
        $("#volumeUVCX24h").text(result.volume24hr.substr(0,4));
        $("#priceUVCX24h").text(result.price24hr.substr(0,9));
        $("#currentUVCXPrice").text(result.dashboard_price.substr(0,9));
        $("#changeUVCXPercent").text(result.change_pct.substr(0,3));
    });
});