import { Router } from 'express';
import * as LoginController from '../controllers/login.controller';
const router = new Router();

// Sign in the user
router.route('/login/sign-in').post(LoginController.getPosts);

// Sign out the user
router.route('/login/sign-out').post(LoginController.getPosts);

// Create a new user account
router.route('/login/create').post(LoginController.getPosts);

// Turn a user account inactive
router.route('/login/deactivate').post(LoginController.getPosts);

export default router;