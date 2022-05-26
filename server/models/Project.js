const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    projectName: { type: String, required: true, unique: true },
    Date: { type: Date, required: true },
    technologies: { type: [String], required: true },
    website: { type: String, required: false },
    github: { type: String, required: false },
    imageFolder: { type: String, required: true },
    description: { type: String, required: true },
    myRole: { type: String, required: false },
    roadBlocks: { type: String, required: false },
    solution: { type: String, required: false },
    features: { type: [String], required: false },
    keywords: { type: [String], required: false }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Project = model('project', projectSchema);

module.exports = Project;
