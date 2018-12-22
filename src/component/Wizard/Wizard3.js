import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import {updateMortgage} from '../../ducks/reducer';
import {updateRent} from '../../ducks/reducer';

class Wizard3 extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         mortgage: 0,
    //         rent: 0
    //     }
    // }

    // handleChange = (prop, val) => {
    //     this.setState({
    //         [prop]: val
    //     })
    //     console.log(this.state)
    // }

    // createPost = () => {
    //     let { id, name, address, city, state, zip, img, mortgage, rent } = this.state;
    //     axios.post('/api/house', { id, name, address, city, state, zip, img, mortgage, rent })
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({
    //                 id: res.data,
    //                 name: res.data,
    //                 address: res.data,
    //                 city: res.data,
    //                 state: res.data,
    //                 zip: res.data,
    //                 img: res.data,
    //                 mortgage: res.data,
    //                 rent: res.data
    //             })
    //         })
    // }


    render() {
        console.log(this.props)
        const {updateRent, updateMortgage} = this.props;
        return (
            <div className='wizardThree'>

                <h6><input className='mortgage' onChange={(e) => updateMortgage( e.target.value)} />Mortgage</h6>
                <h6><input className='rent' onChange={(e) => updateRent(e.target.value)} />Rent</h6>

                <Link to='/wizard/step2'><button className="nextButton">
                    Previous Step
                    </button></Link>

                <button className='completeButton' onClick={this.createPost}>Complete</button>

            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {mortgage, rent} = reduxState;
    return{
        mortgage,
        rent
    }
}

const outputActions={updateMortgage, updateRent}
export default connect(mapStateToProps, outputActions )(Wizard3);