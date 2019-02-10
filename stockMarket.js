// assuming stock was bought at myArr[0], find the maxProfit for that particular price.

const findPositives = function(myArr){
    let max = 0;
    let sellAt = myArr[0];
    for (i = 0; i < myArr.length - 1; i++){
        const profit = myArr[i + 1] - myArr[0];
        if (profit > max){
            max = profit;
            sellAt = myArr[i];
        }
    }
    return [myArr[0],sellAt, max];

};

// from all of the max profits, find the highest profit within the object. return -1 if stock isn't profitable at all.

const profit = function maxProfit(myArr){
    let buyingPrice;
    let sellingPrice;
    let profit = -1;
    for(let i = 0; i < myArr.length - 1; i++){
        let currentProfit = findPositives(myArr.slice(i));
        if (currentProfit[2] > profit){
            buyingPrice = currentProfit[0];
            sellingPrice = currentProfit[1];
            profit = currentProfit[2];
        }
    }
    if (profit > 0){
        return (`if the stock is bought at ${buyingPrice} and sold at ${sellingPrice}, the max profit is achieved at ${profit}`);
    }
        return -1;
};

var prices = [45, 24, 35, 31, 40, 38, 11];

console.log(profit(prices));
