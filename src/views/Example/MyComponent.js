import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
/*
    JSX => return ve 1 phan tu cua html
    React.Fragment
*/
class MyComponent extends React.Component {

    // state = {
    //     name: 'Duc',
    //     channel: 'HMD production'
    // }
    state = {
        arrJobs: [
            {id:'abcJob1',title:'Developer',salary:'500'},
            {id:'abcJob2',title:'Tester',salary:'400'},
            {id:'abcJob3',title:'Project Manager',salary:'1000'}
        ]
    }

    addNewJob = (job) =>{
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
    }
    deleteAJob=(job)=>{
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item=>item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
   componentDidMount=()=>{
       console.log('run component did mount')
   }
   componentDidUpdate=(prevProps, prevState)=>{
       console.log('run component did update','prevState: ',prevState,' current State: ',this.state)
   }
    // handleOnChangeName = (event)=>{
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleClickButton = ()=>{
    //     alert('Click me')
    // }
    render(){

        // let name = 'Duc';
        return(
            <>
                {/* <div className="first">
                    <input type="text" value={this.state.name}
                        onChange={(event)=>this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                <div className="second">
                    My youtube channel: {this.state.channel}
                </div>
                <div className="Third">
                    <button onClick={()=>this.handleClickButton()}>Click me</button>
                </div> */}
                <AddComponent 
                addNewJob={this.addNewJob}
                />
               
                <ChildComponent 
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
                />
                {/* <ChildComponent name={'Child two'} />
                <ChildComponent name={'Child three'} /> */}
            </>
        )
    }
}

export default MyComponent;