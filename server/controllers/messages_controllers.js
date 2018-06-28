const messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
    const {text, time} = req.body
    messages.push({text,time,id});
    id++;
    res.status(200).send(messages);
    },
    read: (req, res) => {
    res.status(200).json(messages);  
    },
    update: (req, res) => {
    const {text} = req.body;
    const {id} = req.params;
    messages.forEach(message => {
        if (message.id == id){
            message.text = text;
        }
    });
    res.status(200).json(messages);   
    },
    delete: (req, res) => {
    const messageId = req.params.id;
    const messageIndex = messages.findIndex(message => messageId === message.id);
    console.log(messageIndex)
    messages.splice(messageIndex, 1);
    
    res.status(200).json(messages);
    }
}


