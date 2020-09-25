import React from 'react';

class Covidcard extends React.Component{
    render(){
        return(
        <div className={this.props.color} style={{maxWidth:"18rem",float:"left",margin:"20px",textAlign:"center"}}>
            <div className="card-header">{this.props.header}</div>
            <div className="card-body">
                <h5 className="card-title">{this.props.number}</h5>
                <p className="card-text">last Updated: {this.props.date}</p>
            </div>
        </div>
        );
    }
}

export default Covidcard;