import React from 'react';

class Demo extends React.Component{
    constructor(){
        super()
        this.state={
            toggle:true
        }
    }
    handleClick=()=>{
        let togg=this.state.toggle;
        this.setState({
            toggle:!togg
        })
    }
    render(){
        return(
        <div>
            <h2>Toggle btn demo</h2>
            <button onClick={this.handleClick}>{this.state.toggle?'ON':'OFF'}</button>
        </div>
        )
    }
}

export default Demo;