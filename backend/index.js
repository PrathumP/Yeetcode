const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
var jwt = require("jsonwebtoken");
//const { auth } = require("./middleware");

const auth = require("./auth");
const bcrypt = require("bcryptjs");

const dbConnect = require("./db/dbconnect");

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
	    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
		const existingEmail = await UserModel.findOne({
			email: req.body.email,
		});
		if (existingEmail) {
			return res.status(409).json({ message: "Email already exists!" });
		}
		
		const newUser = new UserModel({
			email: req.body.email,
			password: encryptedPassword,
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
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.userId }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ message: "Logged in successfully!", status: "ok", token: token });
    } else {
      return res.json({ error: "Server error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

app.get("/free-endpoint", (req, res) => {
	res.json({ message: "You are free to access me anytime" });
  });
  
  // authentication endpoint
  app.get("/auth-endpoint", auth,  (req, res) => {
	res.json({ message: "You are authorized to access me" });
  });

dbConnect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});