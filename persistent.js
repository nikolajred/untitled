function persistence(num) {
    let count = 0;
    let result = [];
    let numNew = 1;
    while(num >= 10){
        while(num !== 0){
            result.push(num%10);
            num -= num%10;
            num /= 10;
        }
        result.reverse();
        console.log(result);

        for(let i = 0; i < result.length; i++){
            numNew *= result[i];
        }
        num = numNew;
        numNew = 1;
        console.log(numNew);
        result = [];
        count++;
    } return count;
}


console.log(persistence(25));
console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));