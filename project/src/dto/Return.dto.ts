
class ReturnDTO{

    public success:boolean;
    public message:string;
    public resultObject?:object;

    constructor(pSuccess:boolean,pMessage:string,pResultObject?:object){
        this.success = pSuccess;
        this.message = pMessage;
        this.resultObject = pResultObject;
    }
}

export default ReturnDTO;
