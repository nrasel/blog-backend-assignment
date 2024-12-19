/* eslint-disable @typescript-eslint/no-explicit-any */
import { TError, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]+)"/);

  const extractedMsg = match && match[1];

  const error: TError = [
    {
      path: '',
      message: `${extractedMsg} is already exists!`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid!!',
    error,
  };
};
export default handleDuplicateError;
