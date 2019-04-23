import React, { Component } from 'react';
import {connect} from 'react-redux';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueWork : '',
            statusAdd : false
        }
    }
    
    // change text in input text
    change = (event) => {
        this.setState({
            valueWork : event.target.value
        })
    }

    addWork = (event) => {
        event.preventDefault();
        
        this.props.changeStatusAdd(this.state.valueWork);
        
    }
    changeStatus = (event) => {
        event.preventDefault();
        this.setState({
            statusAdd : !this.state.statusAdd
        })
    }
    
    showFormAdd = () => {
        if(this.state.statusAdd) {
            return (
                <form className='edit form-group col-4 '>

                <button className='btn btn-secondary' onClick = {(event) => this.changeStatus(event)}>Đóng lại</button>
                <div className='content-add p-3 border border-info rounded mt-4'>
                <h4 className='border-bottom border-info pb-3'>Thêm công việc</h4>
                <label className='mt-3'>Tên</label>
                <input type='text' placeholder='Công việc mới' className='form-control' onChange = { (event) => this.change(event) }/>
                <input type='reset' className='btn btn-primary mt-4' value='Thêm' onClick = { (event) => this.addWork(event) }/>
                </div>
        
            </form>

            )
        } else {
            return (
                <form className='edit form-group col-4 '>
                    <button className='btn btn-primary' onClick = {(event) => this.changeStatus(event)}>Thêm mới</button>     
                </form>
                
            )
        }
    }
    render() {
        return (
            <React.Fragment >
                { this.showFormAdd() }
            </React.Fragment>
            
        )
    }
     
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        statusAdd: state.statusAddForm
    }
}
const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatusAdd: (info) => {
            dispatch({type : 'ADD_TODO' ,info})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)