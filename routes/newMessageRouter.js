import { Router } from 'express';

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