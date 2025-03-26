import { Router } from 'express';

const newMessageRouter = Router(); 

newMessageRouter.get('/', (req, res) => {
    res.send("It also works, you are in the new messages page")
}); 

export default newMessageRouter; 