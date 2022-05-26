const { Schema, model } = require('mongoose');

const historySchema = new Schema(
  {
    historyName: { type: String, required: true, unique: true },
    historyType: {
      type: String,
      enum: ['job', 'other'],
      required: true,
      default: 'other'
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    position: { type: String, required: false },
    location: { type: String, required: false },
    description: { type: [String], required: true, default: [''] },
    link: { type: String, required: false }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const History = model('history', historySchema);

module.exports = History;
