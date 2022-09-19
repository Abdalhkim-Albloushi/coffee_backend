const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productDB')
.then((c)=>console.log('connect'));