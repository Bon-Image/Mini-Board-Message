import { Router } from 'express';

const indexRouter = Router(); 

indexRouter.get('/', (req, res) => {
    res.send("Yep, it's working, you are in the home page"); 
}); 

export default indexRouter; 