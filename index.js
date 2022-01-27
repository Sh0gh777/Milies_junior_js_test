const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    var sum = 0;
    cartItemsPrices.forEach((element) => {
      sum += parseFloat(element);
    });
    if(sum.toFixed(2)==WINNING_SUM){return true}
    else{return false}
}

module.exports = doesCartWinPrize;
