// Write a JS program to convert the amount into coins.
// Example:
// input : 46
// And possible coins are 100,50,20,10,5,2,1
// output : 20,20,5,1

const convertCoins = (amount) => {
  const coins = [100, 50, 20, 10, 5, 2, 1];
  let coinReq = null;
  let i = 0;
  while (amount > 0) {
    coinReq = parseInt(amount / coins[i]);
    if (coinReq) {
      console.log(`${coins[i]} - ${coinReq}`);
      amount = amount % coins[i];
    }
    i++;
  }
};
convertCoins(46);
