import React from 'react'

class Apiput extends React.Component{
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'PUT',
            body:JSON.stringify({
                userId:1,
                title:'sometjusthing',
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

export default Apiput;