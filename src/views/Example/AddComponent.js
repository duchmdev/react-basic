import React from 'react';

class AddComponent extends React.Component{
    state={
        title: '',
        salary: ''
    }
    handleChangetitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event)=>{
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('missing required params')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random()*1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title:'',
            salary:''
        })
    }
    render(){
        return(
            <>
                    <form>
                        <label htmlFor="fname">Job's Title:</label><br/>
                        <input 
                        type="text" 
                        value={this.state.title} 
                        onChange={(event)=>this.handleChangetitle(event)}/><br/>
                        <label htmlFor="lname">Salary:</label><br/>
                        <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event)=>this.handleChangeSalary(event)}/><br/><br/>
                        <input type="submit"
                        onClick={(event)=>this.handleSubmit(event)}
                        />
                    </form> 
             </>
        )
    }
}

export default AddComponent;