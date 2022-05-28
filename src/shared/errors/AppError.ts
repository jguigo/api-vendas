export class AppError {
   public readonly message: string;
   public readonly codeStatus: number;

   public constructor(message: string, codeStatus: number = 400) {
      this.message = message;
      this.codeStatus = codeStatus;
   }
}
