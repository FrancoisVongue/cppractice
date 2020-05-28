const number = "42";
let sum = 0;
let take = number.length;

while(take){
    for(let i = 0; i < number.length - take + 1; i++){
        sum += parseInt(number.slice(i, i+take));
    }
    --take;
}
console.log(sum);
