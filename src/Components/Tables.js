import React, { Component } from 'react';
import NewItem from './NewItem.js';
import { data } from '../firebaseConnect';
import { connect } from 'react-redux';
class Tables extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data : [] 
        }
    }
    
       componentWillMount() {
        data.on('value',(works) => {
            /**
             * why can forEach in object ?
             */
            let arrData = [];
            works.forEach(val => {
                arrData.push({
                    id : val.key,
                    name : val.val().name
                })
            })
            this.setState({
                data : arrData 
            })
        })
       }

    render() {
        let { findSearch } = this.props;
        let { data } = this.state;
        /**
         * why print two findSearch when load page
         */
        console.log(findSearch)
        let arrData = data.map((val,i) => {
            if(val.name.toLowerCase().includes(findSearch.toLowerCase())) {
                return( <NewItem key = {i} stt = {i + 1} name = {val.name} id = {val.id} /> )
            } 
            return true;
        })
        
        return (
            <div className='show col-8 '>
              <table className='w-100 '>
                <thead>
                    <tr>
                        <td>Stt</td>
                        <td>Công việc</td>
                        <td>Hành động</td>
                    </tr>
                </thead>
                <tbody>

                { arrData }

                </tbody>
            

              </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        findSearch: state.find
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tables)
