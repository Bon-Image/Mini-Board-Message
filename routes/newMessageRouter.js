import { Router } from 'express';
import messages from '../database/messages.js'; 

const newMessageRouter = Router(); 

newMessageRouter.get('/', (req, res) => {
    res.render('form'); 
}); 


newMessageRouter.post('/', (req, res) => {
    const { user, text } = req.body;
  
    if (user && text) {
      messages.push({
        user,
        text,
        added: new Date()
      });
    }
  
    res.redirect('/');
  });


export default newMessageRouter; 