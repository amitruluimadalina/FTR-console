import { askFrequency, collectData, consoleIntervalFunction} from './utils';

let frequency: string;
let numbers: number[]=[];

const Startup = async () => {
    frequency = await askFrequency();
    if(frequency){
        let interval = setInterval(()=>consoleIntervalFunction(numbers), Number(frequency)*1000);
        collectData(numbers, interval, frequency);
    }
};

Startup();