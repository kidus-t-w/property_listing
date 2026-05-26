export const errorHandler = (_: any, message:any) => {
  const error = new Error()
  error.message = message;
  return error;
}