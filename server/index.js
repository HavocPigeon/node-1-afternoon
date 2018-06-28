const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controllers');

const app = express();
app.use(bodyParser.json());
app.use(express.static('./public/build'));

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.post('/api/messages', mc.create);
app.delete('/api/messages/:id', mc.delete);
app.put('/api/messages/:id', mc.update);
app.get('/api/messages', mc.read);

