const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
var jwt = require("jsonwebtoken");
const { auth } = require("./middleware");

const ProblemsModel = require("./models/problems");
const SubmissionsModel = require("./models/submissions");
const UserModel = require("./models/User");

const JWT_SECRET = "secret";
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

const sampleProblems = [{
	title: "Sample Problem",
	problemId: "1",
	difficulty: "Easy",
	description: "This is a sample problem description.",
	exampleIn: "Input for the sample problem",
	exampleOut: "Output for the sample problem",
  },{ title: "Sample Problem",
  problemId: "2",
  difficulty: "Easy",
  description: "This is a sample problem2 description.",
  exampleIn: "Input for the sample problem2",
  exampleOut: "Output for the sample problem2",
},{ title: "Sample Problem3",
problemId: "3",
difficulty: "Medium",
description: "This is a sample problem3 description.",
exampleIn: "Input for the sample problem3",
exampleOut: "Output for the sample problem3",
},{ title: "Sample Problem4",
problemId: "6",
difficulty: "Hard",
description: "This is a sample problem6 description.",
exampleIn: "Input for the sample problem6",
exampleOut: "Output for the sample problem6",
},{ title: "Sample Problem5",
problemId: "5",
difficulty: "Medium",
description: "This is a sample problem5 description.",
exampleIn: "Input for the sample problem5",
exampleOut: "Output for the sample problem5",
},{ title: "Sample Problem6",
problemId: "4",
difficulty: "Hard",
description: "This is a sample problem4 description.",
exampleIn: "Input for the sample problem4",
exampleOut: "Output for the sample problem4",
},
];

async function saveSampleProblems() {
	try {
	  for (const problemData of sampleProblems) {
		const { problemId } = problemData;
		const existingProblem = await ProblemsModel.findOne({ problemId });
  
		if (existingProblem) {
		  console.log(`Problem with problemId '${problemId}' already exists. Skipping...`);
		  continue;
		}
  
		const sampleProblem = new ProblemsModel(problemData);
		await sampleProblem.save();
		console.log(`Sample problem '${sampleProblem.title}' saved successfully!`);
	  }
	} catch (error) {
	  console.error(error);
	}
  }
  
  saveSampleProblems();

app.get("/problems", async (req, res) => {
  const problems = await ProblemsModel.find();

  res.json({
    problems: problems,
  });
});

app.get("/problem/:id", async (req, res) => {
  const id = req.params.id;
  const problem = await ProblemsModel.findOne({ problemId: id });

  if (!problem) {
    return res.status(411).json({});
  }
  res.json({
    problem,
  });
});

app.get("/me", auth, async (req, res) => {
  const user = UserModel.find({
    userId : req.userId
  });
  res.json({ user });
});

app.get("/submissions/:problemId", auth, async (req, res) => {
  const problemId = req.params.problemId;
  const submissions = await SubmissionsModel.find({
      problemId : problemId,
      userId : req.userId
  });
  res.json({
    submissions,
  });
});

app.post("/submission", auth, async (req, res) => {
  const isCorrect = Math.random() < 0.5;
  const problemId = req.body.problemId;
  const submission = req.body.submission;
  let status = isCorrect ? "WA" : "AC";

  const newSubmission = new SubmissionsModel({
		submission: submission,
		problemId: problemId,
		userId: req.userId,
		status: status,
	});
  await newSubmission.save();
	return res.json({
		status: status,
	});
});

app.post("/signup", async (req, res) => {
  try {
		const existingEmail = await UserModel.findOne({
			email: req.body.email,
		});
		if (existingEmail) {
			return res.status(409).json({ message: "Email already exists!" });
		}
		const newUser = new UserModel({
			email: req.body.email,
			password: req.body.password,
		});

		await newUser.save();

		console.log("User created!");
		console.log(newUser.toJSON());
		return res.json({
			msg: "Success",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Server error" });
	}
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await UserModel.findOne({
			name: req.body.username,
		});
		if (!user) {
			return res.status(403).json({ msg: "User not found" });
		}

		const isMatch = await user.comparePassword(req.body.password);
		if (!isMatch) {
			return res.status(403).json({ msg: "Incorrect password" });
		}

		const token = jwt.sign(
			{
				id: user.userId,
			},
			JWT_SECRET
		);

		console.log("User logged in!");
		console.log(req.body.username);
		res.status(200).json({
			message: "Logged in successfully!",
			token: token,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Server error" });
	} 
}); 

mongoose
	.connect("mongodb://localhost:27017/lcproblemdb", {
		useNewUrlParser: true,
  		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log("ERROR: " + err);
	});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});