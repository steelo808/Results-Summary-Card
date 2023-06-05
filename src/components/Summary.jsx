import React from 'react'

const Summary = () => {
return (
    <div className ="summary">
    <h4 className="sum-num-btn-clr">Summary</h4>
    <div className= "categories">
    <div className ="category" id ="reaction">Reaction <div className='num-group'><span>80</span> / 100 </div></div>
    <div className ="category" id ="memory">Memory <div className="num-group"><span>92</span> / 100</div></div>
    <div className ="category" id ="verbal">Verbal <div className="num-group"><span>61</span> / 100 </div></div>
    <div className ="category" id ="visual">Visual <div className="num-group"><span>73</span> / 100 </div></div>
    </div>
    <button className='btn'>Continue</button>
    </div>
)
}

export default Summary