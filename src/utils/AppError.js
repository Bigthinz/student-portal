import React, { Component } from 'react';

export default class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'Fail' : 'Error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// function AppError(message,statusCode) {
//     this.statusCode = statusCode;
//     this.message = message;
//     this.stack = (new Error()).stack;
// }
// export default AppError.prototype = new Error;
