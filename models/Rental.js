const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  item: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Item', 
    required: true 
},
  renter: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true 
},
  startDate: { type: Date, 
    required: true 
},
  endDate: { type: Date, required: true 

}
});

module.exports = mongoose.model('Rental', rentalSchema);
