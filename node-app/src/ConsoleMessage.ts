import { IMessage } from './IMessage';
var inquirer = require('inquirer');

class ConsoleMessage implements IMessage {
    name: string;
    type: string;
    message: string;
    constructor(name: string, type: string, message: string) {
        this.name = name;
        this.type = type;
        this.message = message;
    };
    async collectInput(): Promise<string> {
        const answer = await inquirer.prompt({
            name: this.name,
            type: this.type,
            message: this.message
        });
        return answer[this.name];
    };
};

export default ConsoleMessage;