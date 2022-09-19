
class ApiError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.message =  message;
        this.sta = 0;
        this.isOperational = true;

    }
}

module.exports = ApiError;