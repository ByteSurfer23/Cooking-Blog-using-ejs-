const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true});
// on setting true to useNewUrlParser, you ask the system to use new url parser, and for useUnifiedTopology you ask it to use new topology engine 
// a parser,reads and breaks down web addresses, and gives certain data like tpye of connection(http or mongodb), addresss of the place to which you're connecting (website or database) etc 
// a topology engine  keeps track of all servers connected to the cluster, and ensures the easiest possible way of connection for each cluster, and it also performs load balancing (distributing connections efficiently to avoid overload on a cluster)
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    // once is a function that runs when a particular event has occured
    // open is an event which is set on by the connection, if the event has occured then the following function will be performed
    console.log('Connected')
});
require('./Category');
require('./Recipe');