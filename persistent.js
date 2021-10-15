// function persistence(num) {
//     let count = 0;
//     let result = [];
//     let numNew = 1;
//     while(num >= 10){
//         while(num !== 0){
//             result.push(num%10);
//             num -= num%10;
//             num /= 10;
//         }
//         result.reverse();
//         console.log(result);
//
//         for(let i = 0; i < result.length; i++){
//             numNew *= result[i];
//         }
//         num = numNew;
//         numNew = 1;
//         console.log(numNew);
//         result = [];
//         count++;
//     } return count;
// }
//
//
//
//
// console.log(persistence(25));
// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));


function stray(numbers) {
    let firstNumber = numbers[0];
    let secondNumber;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== firstNumber){
            secondNumber = numbers[i];
        }
    }
    let counterFirstNumber = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == firstNumber){
            counterFirstNumber++;
        }

    }
    let counterSecondNumber = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == secondNumber){
            counterSecondNumber++;
        }

}
    if(counterFirstNumber > counterSecondNumber){
    return secondNumber;
    }else return firstNumber;
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([3, 17, 17, 17, 17, 17, 17]));