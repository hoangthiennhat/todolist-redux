import React, { Component } from 'react';
import { connect } from 'react-redux';
class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editForm : true,
            valueInputEdit : {
                id : this.props.id,
                name : this.props.name
            }
        }
    }
    
    delete = () => {
        this.props.deleteItem(this.props.id)
    }
            
    // change status form when click button edit
    changeStatusEdit = () => {
        this.setState({
            editForm : !this.state.editForm
        })
    }
    // change input edit
    changeFormEdit = (event) => {
        this.setState({
            valueInputEdit : {
                id : this.props.id,
                name : event.target.value
            }
        })
    }
    // save form edit
    saveFormEdit = () => {
        this.setState({
            editForm : !this.state.editForm
        })
        this.props.saveItemEdit(this.state.valueInputEdit)
    }
    showForm = () => {
        if (this.state.editForm) {
            return(
                <React.Fragment>
                    <td>{ this.props.stt }</td>
                    <td>{ this.props.name }</td>
                    <td className='py-3'>
                        <button className='btn btn-info mr-3' onClick = { () => this.changeStatusEdit() } >Edit</button>
                        <button className='btn btn-danger' onClick = { () =>  this.delete()  } >Delete</button>
                    </td>
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <td>{ this.props.stt }</td>
                    <td className='px-5'>
                        <input type='text' className='form-control' defaultValue= { this.props.name } onChange= { (event) => this.changeFormEdit(event) }/>
                    </td>
                    <td className='py-3'>
                        <button className='btn btn-success ' onClick = { () => this.saveFormEdit() } >Save</button>
                        
                    </td>
                </React.Fragment>
            )
        }
    }
    render() {
        return (
            <tr>
                
                { 
                    this.showForm()
                }
                
            </tr>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteItem: (idItem) => {
            dispatch({ type : 'DELETE',idItem })
        },
        saveItemEdit: (nameItem) => {
            dispatch({ type : 'SAVE_FORM',nameItem })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewItem)