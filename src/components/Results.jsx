import React from 'react'

const Results = () => {
return (
    <div className ="result-card">
        <h4 className="color-lgt result-card-title">Your Result</h4>
        <div className ="result-circle">
        <h1 id ="result-num">76</h1>
        <p className="color-lgt">of 100</p>
        </div>
        <h3>Great</h3>
        <p className="color-lgt your-performance">Your performance exceed 65% of the people conducting the test test here!</p>
    </div>
)
}

export default Results