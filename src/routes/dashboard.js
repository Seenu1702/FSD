import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('<h2>Dashboard Routed successfully</h2>');
})

export default router;