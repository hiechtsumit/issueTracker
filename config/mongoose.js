const mongoose = require('mongoose');
var db;
connectionFun();

async function connectionFun(){
  await mongoose.connect('mongodb+srv://sumit_2023:reJyyv8FYZ2Hnvyj@cluster0.p1okbtk.mongodb.net/issueTracker?retryWrites=true&w=majority');
  db = await mongoose.connection;
  db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

  db.once('open', () => {
    console.log('-->Connected to Database :: MongoDB<--');
  });
}


module.export = db;
