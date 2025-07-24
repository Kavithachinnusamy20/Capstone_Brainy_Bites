import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/authController.js';

/** Questions Routes API */

router.route('/register')
        .get(controller.validateUser) /** GET Request */
        .post(controller.registerUser) /** POST Request */
        .delete(controller.deleteUser) /** DELETE Request */


export default router; 