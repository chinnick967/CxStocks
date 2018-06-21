import { Router } from 'express';
import * as ProfilesController from '../controllers/profiles.controller';
const router = new Router();

router.route('/retrive-profiles').get(ProfilesController.getProfiles);

export default router;