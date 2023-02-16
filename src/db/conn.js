const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/olympics", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongoose connection successful');
}).catch((err) => {
    console.error(err);
});
