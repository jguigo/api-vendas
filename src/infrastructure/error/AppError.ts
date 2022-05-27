class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  public constructor(message: string, statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
