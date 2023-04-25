console.log("Connected");


function sumEvenNumbers(numbers){
    let sum = 0;

    for(let i=0; i<numbers.length;i++){
        if(numbers[i]%2 == 0){
            sum += numbers[i];
        }
    }
    return sum;
}
let numbers = [1,2,3,4,5,6,7,8,9,10]
let sum1 = sumEvenNumbers(numbers);
console.log("The sum is",sum1);