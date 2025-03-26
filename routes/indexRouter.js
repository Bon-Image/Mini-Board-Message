import { Router } from 'express';
import messages from '../database/messages.js'; 

const indexRouter = Router(); 

indexRouter.get('/', (req, res) => {
    res.render('index', {title: "Mini Messageboard", messages:messages}); 
}); 


indexRouter.get('/messages/:id', (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = messages.find(msg => msg.id === messageId);
  
    if (!message) {
      return res.status(404).send('Message not found');
    }
  
    res.render('message', { message });
  });



export default indexRouter; 