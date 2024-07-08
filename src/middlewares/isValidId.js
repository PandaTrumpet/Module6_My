import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';
export const isValidId = (req, res, next) => {
  const { studentId } = req.params;
  if (!isValidObjectId(studentId)) {
    return next(createHttpError(404, 'Not found'));
  }

  next();
};
