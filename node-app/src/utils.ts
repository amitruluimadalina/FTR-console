import ConsoleMessage from './ConsoleMessage';

async function askFrequency(){
    let frequencyQuestion = new ConsoleMessage( 'frequency',  'number', 'Please enter the amount of time in seconds between emitting numbers and their frequency');
    return await frequencyQuestion.collectInput();
}

async function askNumbers(numbers: Array<number>) {
    let message;
    if(numbers.length === 0) {
        message = 'Please enter the first number';
    } else {
        message = 'Please enter the next number';
    }
    let numberQuestion = new ConsoleMessage( 'numbers' , 'input', message);
    return await numberQuestion.collectInput();
}

function verifyResponseType(response: any) {
    if(!isNaN(response)) {
        response = Number(response);
    }
    return response;
}

function isFibonacci (num: number, count = 1, last = 0): boolean {
    if(count < num){
       return isFibonacci(num, count+last, count);
    };
    if(count === num){
       return true;
    }
    return false;
}

async function collectData (numbers:any, interval: any, frequency:string) {
    let response = await askNumbers(numbers);
    let responseType = verifyResponseType(response);
    if(typeof responseType==='string')
    switch(responseType.toLocaleLowerCase()){
        case 'quit':
            return numbers;
        case 'halt':
            clearInterval(interval);
            collectData(numbers,interval,frequency);
            break;
        case 'resume':
            setInterval(()=>consoleIntervalFunction(numbers), Number(frequency)*1000);
            collectData(numbers, interval,frequency);
            break;
    }else{
        if(isFibonacci(responseType)){
            console.log('FIB');
        }
        numbers.push(responseType);
        collectData(numbers, interval,frequency);
    }
}

function countOccurances (numbers: Array<number>){
    const count = Object();
    for (const number of numbers) {
        if (count[number]) {
          count[number] += 1;
        } else {
          count[number] = 1;
        }
    }
    let keys = Object.keys(count);
    keys.sort((a:any,b:any)=> b-a);
    for ( var i = 0; i < keys.length; i++ ) {
    console.log( keys[i],':', count[keys[i]] );
    }
}

function consoleIntervalFunction (numbers: Array<number>){
    countOccurances(numbers);
}

export {askFrequency, askNumbers, verifyResponseType, collectData, countOccurances, consoleIntervalFunction};