module.exports = function toReadable (number) {

let numberPart = 0;
let i = 0;
let result = '';
let finalResult = '';
let numberString = '';


while (i < number.toString().length && (number.toString()[i - 1] * (10 ** (number.toString().length - i))) !== 10) {
    numberString = number.toString()[i];
    numberPart = Number(numberString) * (10 ** (number.toString().length - i - 1));
    if (numberPart === 0) {
        if (number.toString().length === 1) {
            result = 'zero';  
          } else result = '';
    } else if (numberPart === 1) {
        result = 'one';
    } else if (numberPart === 2) {
        result = 'two';
    } else if (numberPart === 3) {
        result = 'three';
    } else if (numberPart === 4) {
        result = 'four';
    } else if (numberPart === 5) {
        result = 'five';
    } else if (numberPart === 6) {
        result = 'six';
    } else if (numberPart === 7) {
        result = 'seven';
    } else if (numberPart === 8) {
        result = 'eight';
    } else if (numberPart === 9) {
        result = 'nine';
    }
    else if (numberPart === 10) {
        if ((Number(number.toString()[i + 1])) === 0) {
            result = 'ten';
        } else if ((Number(number.toString()[i + 1])) === 1) {
            result = 'eleven';
        } else if ((Number(number.toString()[i + 1])) === 2) {
            result = 'twelve';
        } else if ((Number(number.toString()[i + 1])) === 3) {
            result = 'thirteen';
        } else if ((Number(number.toString()[i + 1])) === 4){
            result = 'fourteen';
        } else if ((Number(number.toString()[i + 1])) === 5) {
            result = 'fifteen';
        } else if ((Number(number.toString()[i + 1])) === 6) {
            result = 'sixteen';
        } else if ((Number(number.toString()[i + 1])) === 7) {
            result = 'seventeen';
        } else if ((Number(number.toString()[i + 1])) === 8) {
            result = 'eighteen';
        } else if ((Number(number.toString()[i + 1])) === 9) {
            result = 'nineteen';
        }
    }
    else if (numberPart === 20) {
        result = 'twenty';
    } else if (numberPart === 30) {
        result = 'thirty';
    } else if (numberPart === 40) {
        result = 'forty';
    } else if (numberPart === 50) {
        result = 'fifty';
    } else if (numberPart === 60) {
        result = 'sixty';
    } else if (numberPart === 70) {
        result = 'seventy';
    } else if (numberPart === 80) {
        result = 'eighty';
    } else if (numberPart === 90) {
        result = 'ninety';
    } else if (numberPart === 100) {
        result = 'one hundred';
    } else if (numberPart === 200) {
        result = 'two hundred';
    } else if (numberPart === 300) {
        result = 'three hundred';
    } else if (numberPart === 400) {
        result = 'four hundred';
    } else if (numberPart === 500) {
        result = 'five hundred';
    } else if (numberPart === 600) {
        result = 'six hundred';
    } else if (numberPart === 700) {
        result = 'seven hundred';
    } else if (numberPart === 800) {
        result = 'eight hundred';
    } else if (numberPart === 900) {
        result = 'nine hundred';
    } 
    
    finalResult = `${finalResult} ${result}`;
    i = i + 1;
} 
finalResult = finalResult.replace(/\s{2,}/g, ' ').trim();
return finalResult;
}

