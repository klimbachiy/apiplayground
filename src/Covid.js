import React from 'react';
import Covidcard from './Covidcard';

class Covid extends React.Component{
    constructor(){
        super()
        this.state={
            infected:0,
            recovered:0,
            death:0,
            date:null
        }
    }
    componentDidMount(){
        this.handleClick();
    }
    handleClick=()=>{
        fetch('https://covid19.mathdro.id/api/countries/india',{
            method:'GET'
        }).then(res=>res.json())
        .then(data=>{
            this.setState({
                infected:data.confirmed.value,
                recovered:data.recovered.value,
                death:data.deaths.value,
                date:data.lastUpdate
            })
        }).catch(err=>console.log(err))
    }
    render(){
        return(
            <div style={{position:"fixed",left:"10%"}}>
                <Covidcard header="Infected" color="card text-white bg-danger mb-3" number={this.state.infected} date={this.state.date}/>
                <Covidcard header="Recovered" color="card text-white bg-success mb-3" number={this.state.recovered} date={this.state.date}/>
                <Covidcard header="Death" color="card text-white bg-dark mb-3" number={this.state.death} date={this.state.date}/>
                <button className="fa fa-refresh btn btn-primary" onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default Covid;