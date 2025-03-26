import { Router } from 'express';
import messages from '../database/messages.js'; 

const indexRouter = Router(); 

indexRouter.get('/', (req, res) => {
    res.render('index', {title: "Mini Messageboard", messages:messages}); 
}); 

export default indexRouter; 