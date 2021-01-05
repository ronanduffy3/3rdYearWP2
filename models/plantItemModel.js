const { Schema, model } = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const plantItemSchema = new Schema({
    hireID: {type: String, required: true},
    yearAdded: {type: Number, min: 1990, required: true},
    itemtitle: {type: String, required: true},
    itemdescription: {type: String, required: true}
}, {toJSON: {virtuals: true}});

plantItemSchema.virtual('uri').get(function (){
    return `/plantItems/${this._id}`;
});

plantItemSchema.plugin(uniqueValidator);

//let plantItem = mongoose.model('plantItem', plantItemSchema);

module.exports = model("plantItem", plantItemSchema);
