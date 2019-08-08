const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'ref',
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'ref',
  }],
}, { timestamps: true });

module.exports = model('Dev', DevSchema);