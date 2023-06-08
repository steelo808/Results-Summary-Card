import React from 'react'

const Summary = () => {
return (
    <div className ="summary">
    <h4 className="sum-num-btn-clr title">Summary</h4>
    <div className= "categories">
    <div className ="category" id ="reaction"><span><img src ="./images/icon-reaction.svg"></img> Reaction </span><div className='num-group'><span>80</span> / 100 </div></div>
    <div className ="category" id ="memory"><span><img src ="./images/icon-memory.svg"></img> Memory </span><div className="num-group"><span>92</span> / 100</div></div>
    <div className ="category" id ="verbal"><span><img src ="./images/icon-verbal.svg"></img> Verbal </span> <div className="num-group"><span>61</span> / 100 </div></div>
    <div className ="category" id ="visual"><span><img src ="./images/icon-visual.svg"></img> Visual </span><div className="num-group"><span>73</span> / 100 </div></div>
    </div>
    <button className='btn'>Continue</button>
    </div>
)
}

export default Summary