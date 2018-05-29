import { Router } from 'express';
import * as LoginController from '../controllers/login.controller';
const router = new Router();

// Sign in the user
router.route('/sign-in').post(LoginController.signIn);

// Sign out the user
router.route('/sign-out').post(LoginController.getPosts);

// Create a new user account
router.route('/create').post(LoginController.createAccount);

// Turn a user account inactive
router.route('/deactivate').post(LoginController.getPosts);

export default router;