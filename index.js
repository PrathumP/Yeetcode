const express = require('express')
const app = express()
const port = 3000
const jwt = require('jsonwebtoken')

const USERS =[
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' }
];

const SUBMISSIONS =[];

function generateAuthToken(user) {
    const secretKey = 'your secret-key'; // Replace with your own secret key
  
    // Create the token with user data and secret key
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
  
    return token;
} 

const QUESTIONS = [{
    title : "Total sum",
    description : " Given an array, return the sum of all the elements of the array",
    test_Cases : [{
        input : "[1,2,3,4,5,6]",
        output : "21"
    }]

}];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', (req,res) => {
    const { email, password} = req.body;

    const USEREXISTS = USERS.some(user => user.email === email)

    if (USEREXISTS){
        res.status(409).json({message : "User with this email already exists"});
    } else {
        USERS.push({email,password});
        res.status(200).json({ message : "Signup Successful"});
    }
})

app.post('/login', (req,res) => {
    const { email, password } = req.body;

    const USEREXISTS = USERS.some(user => user.email === email);
    const token = 'random token';
    if (USEREXISTS){
        if (!user || user.password !== password){
        res.status(401).json({message : "Invalid email or password"});}
        else {
        const token = generateAuthToken(user);

        res.status(200).json({ message :"Login successful"}, token);  
        }
    }
})

app.get('/questions', (req,res) =>{
    res.send(USERS);
})

app.post('/submissions', (req,res) => {
    const {problem,solution} =req.body;
    const isaccepted = Math.random() > 0.5;
    
    const submission = {
        problem,
        solution,
        isaccepted,
    }

    SUBMISSIONS.push(submission);

    if (isaccepted){
        res.status(200).json({message : "Solution accepted"})
    }
    else {
        res.status(400).json({message : "Solution rejected"})
    }
});

app.get('/submissions', (req,res)=>{
    res.send(SUBMISSIONS)
})

app.get('/route2', (req, res) => {
    res.send('Hello World! from route 2')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
