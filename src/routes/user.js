import {Router} from 'express';
import userController from '../controllers/users.js'
const router = Router();

router.get('/', userController.getAllUser)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.put('/:id', userController.editUserById)
router.delete('/:id', userController.deleteUserById)

export default router;  