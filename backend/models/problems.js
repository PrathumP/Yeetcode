const mongoose = require("mongoose");

const Problemschema = new mongoose.Schema({
    title: {
		type: String,
		required: true,
	},
	problemId: {
		type: String,
		required: true,
	},
	difficulty: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	exampleIn: {
		type: String,
		required: true,
	},
	exampleOut: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const ProblemsModel = mongoose.model("problems", Problemschema);

module.exports = ProblemsModel;