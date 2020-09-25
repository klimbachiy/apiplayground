import React from 'react';

class Api extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                data:data
            })
        })
        .catch(err=>console.log(err))
    }
    render(){
        let displayData=this.state.data?(<table className="table-bordered">
            <thead>
                <tr>
                    <td>userId</td>
                    <td>Id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
            </thead>
            <tbody>{
            this.state.data.map(dt=>{
            return <tr key={dt.id}>
                <td>{dt.userId}</td>
            <td>{dt.id}</td>
            <td>{dt.title}</td>
            <td>{dt.body}</td>
            </tr>
            }
            )})
        </tbody></table>):([]);
        return(
        <div>{displayData}</div>
        )
    }
}
export default Api;