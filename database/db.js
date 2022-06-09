const mongoose = require('mongoose');
const colors = require('colors');

(async () => {
    try{
        await mongoose.connect(process.env.URI);
        console.log('Database connected'.green);
    } catch(err){
        console.log(err);
    }
})();