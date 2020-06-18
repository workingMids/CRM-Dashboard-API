import express from 'express';
import { getDashboardDetails } from '../controllers/dashboard';

let router = express.Router();

router.get('/DashboardDetails',getDashboardDetails);



export default router;
