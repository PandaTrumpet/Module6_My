import { Router } from 'express';
// import { getAllStudents, getStudentById } from '../service/students.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/student.js';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constans/index.js';
import {
  getStudentByIdController,
  getStudentsController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { authenticate } from '../middlewares/authenticate.js';
// import { isValidId } from '../middlewares/isValidId.js';
const router = Router();
router.use(authenticate);

router.get('/', ctrlWrapper(getStudentsController));
router.get(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  // isValidId(),
  ctrlWrapper(getStudentByIdController),
);
router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.delete(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(deleteStudentController),
);
router.put(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);
router.patch(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);
export default router;
