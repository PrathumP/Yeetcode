import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./Problemspage.css"
import {backendUrl} from "../constants.js";


const ProblemsPage = () => {
  const [CodeSeg, setCodeSeg] = useState("") ;
  const { pid } = useParams() ;
  const cleanId = pid.substring(1) ;
  const [problem, setProblem] = useState(null);
  const [submission, setSubmission] = useState("");

    const init = async () => {
      const response = await fetch(`${backendUrl}/problem/` + cleanId, {
        method: "GET",
      });

      const json = await response.json();
      setProblem(json.problem);
    }

  useEffect(() => {
    init();
  }, [])
  // console.log(cleanId) ;
  const handleKey = (event) => {
    if (event.key == "Tab"){
      event.preventDefault() ;
      const { selectionStart , selectionEnd , value } = event.target ;
      const val = value.substring(0,selectionStart) + "\t" + value.substring(selectionStart) ;
      event.target.value = val;
      event.target.selectionStart = event.target.selectionEnd = selectionStart+1;
    }
    setCodeSeg(event.value) ;
  }
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const sendMessageToChatGPT = async () => {
    try {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: 'You', message: chatInput }
      ]);
      setChatInput('');
    const response = await axios.post(`${backendUrl}/chatgpt`, { message: chatInput });

    const choices = response.data.response.choices || [];

    const chatResponse = choices.map(choice => choice.message.content).join(' ');

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: 'ChatGPT', message: chatResponse }
      ]);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
  }, [chatHistory]);

  const toggleChat = () => {
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessageToChatGPT();
    }
  };

  return (
    <div>

      {
        problem? (
          <div id="problempage" className='flex-row'>
            <div className="ques">
              <h1>{problem.title}</h1> 
               <div className='desc'><h2>Description</h2>
              <p>{problem.description}</p></div>
              <div className='inout'><code>Input : {problem.exampleIn}</code><br/>
              <code>Output : {problem.exampleOut}</code> </div>
            </div>
            <div className="code">
              <h1>Code Here</h1>
              <div className='code-form'>
                <textarea onChange={(e) => setSubmission(e.target.value)} name="SolvedCode" onKeyDown={ (event) => handleKey(event) }></textarea>
                <button type="submit" id="submit" onClick={async () => {
                  const response = await fetch(`${backendUrl}/submission`, {
                    method: "POST",
                    headers: {
                      "authorization": localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                      problemId: cleanId,
                      submission: submission
                    })
                  });

                  const json = await response.json();
                  console.log(json);

                }}>SubmitCode</button>
              </div>
            </div>
          </div>
        ) :
        (<div>The searched Question Doesn't exist</div>)
      }
<div className="chat-container">
      {!isChatOpen && (
        <button className="toggle-button" onClick={toggleChat}>
          ChatGPT
        </button>
      )}

      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span >ChatGPT</span>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chat-history">
            {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <span>{`${message.sender}: `}</span>{message.message}
            </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleInputKeyPress}
            />
            <button onClick={sendMessageToChatGPT}>Send</button>
          </div>
        </div>
      )}
    </div>

    </div>
    
  )
}

export default ProblemsPage