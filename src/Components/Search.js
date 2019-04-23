import React, { Component } from 'react';
import { connect } from 'react-redux';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search : ''
        }
    }
    
    findSearch = (event) => {
        this.setState({
            search : event.target.value
        })
        this.props.findData(this.state.search)
    }
    width = {
        width : '30%'
    }

    render() {
        
        return (
        <div className='form-group search d-flex'>
            <input type='text' 
                    placeholder='Nhập từ khoá' 
                    style={this.width} 
                    className='form-control d-inline' 
                    onChange = { (event) => this.findSearch(event) }
                />
            <input type='submit' value='Search' className='btn btn-info ml-2    '/>
        </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.search
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        findData: (nameSearch) => {
            dispatch({ type : 'FIND', nameSearch })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
