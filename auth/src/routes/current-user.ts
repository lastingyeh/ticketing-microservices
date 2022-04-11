import express from 'express';

// import { requireAuth } from '../middlewares/require-auth';
import { currentUser } from '@lastingtickets/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
	res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
