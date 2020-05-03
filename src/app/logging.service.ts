export class LoggingService {           

    loggingError(message : string){
        console.log("Error Message :- " + message);
    }

    loggingSuccess(message :string) {
        console.log("Sucess Message :- "+ message);
    }

    loggingInfo(message :string){
        console.log("Info Message " + message);
    }

}