import React from 'react';

class Apidelete extends React.Component{
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>console.log(data))
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default Apidelete;