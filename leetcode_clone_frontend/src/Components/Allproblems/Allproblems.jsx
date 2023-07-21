import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import "./Allproblems.css"
import { backendUrl } from "../constants.js";

const AllproblemsPage = () => {
  const [problems, setProblems] = useState([]);

  const init = async () => {
    const response = await fetch(`${backendUrl}/problems`, {
      method: "GET",
    });

    const json = await response.json();
    setProblems(json.problems);
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <div id="allproblems" className="table-container">
      <table>
        <tbody>

          <tr className='header'>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>

          {problems.map((prob,index) => (
            <tr key = {prob.problemId}><td>
              <Link to={`/problems/:${prob.problemId}`}>
                {prob.title}
              </Link></td>
              <td className={`${prob.difficulty}`} >{prob.difficulty}</td>
              <td className={`${prob.difficulty}`} >{prob.acceptance}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default AllproblemsPage;