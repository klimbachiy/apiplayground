import React from 'react';

class Apipost extends React.Component{

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:JSON.stringify({
                userId:1,
                title:'Something',
                body:'Something'
            }),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(data=>console.log(data))
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default Apipost;