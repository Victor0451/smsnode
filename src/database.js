const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/smsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(db => console.log("DB is conected"))
    .catch(error => console.log(error)) 