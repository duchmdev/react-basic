import React from 'react';
import './Demo.scss';
/*
    JSX => return ve 1 phan tu cua html
    React.Fragment
*/
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = ()=>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDeleteJob = (job)=>{
        this.props.deleteAJob(job)
    }
    render(){

        // let name = 'Duc';
        // let name = this.props.name;
        // let age= this.props.age;

        let { arrJobs }=this.props;
        let { showJobs }=this.state;
        let check = showJobs===true ? 'showJobs=true':'showJobs=false';
        console.log('>>> check condition:',check)
        return(
            <>
               {/* <div>Child Component name-age: {name} - {age}</div> */}
                {showJobs === false ?
                    <>
                        <div>
                            <button className="btn-show"    //style={{ color: 'red'}}
                                onClick={()=>this.handleShowHide()}>
                                Show
                            </button>
                        </div>
                    </>
                    :
                    <>
                            <div className="job-list">
                    {
                        arrJobs.map((item,index)=>{
                            return (
                                <div key={item.id}>
                                    {item.title}-{item.salary}$ <></> <span onClick={()=>this.handleOnClickDeleteJob(item)}>X</span>
                                </div>
                            )
                        })
                    }
                            </div>
                            <div><button onClick={()=>this.handleShowHide()}>Hide</button></div>
                    </>
               }
            </>
        )
    }
}

// const ChildComponent = (props)=>{
//     let { arrJobs }=props;
//     return(
//         <>
//            {/* <div>Child Component name-age: {name} - {age}</div> */}
//            <div className="job-list">
//                 {
//                     arrJobs.map((item,index)=>{
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>
//                         )
//                     })
//                 }
//            </div>
//         </>
//     )
// }

export default ChildComponent;