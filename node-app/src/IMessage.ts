export interface IMessage {
    name: string;
    type: string;
    message:string;
    collectInput: () => Promise<string>
};