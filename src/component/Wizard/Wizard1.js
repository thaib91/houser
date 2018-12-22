import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateId} from '../../ducks/reducer'
import {updateName} from '../../ducks/reducer'
import {updateAddress} from '../../ducks/reducer'
import {updateCity} from '../../ducks/reducer'
import {updateState} from '../../ducks/reducer'
import {updateZip} from '../../ducks/reducer'
// import axios from 'axios';

class Wizard1 extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         id: 0,
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0
    //     }
    // }

    // handleChange = (prop, val) => {
    //     this.setState({
    //         [prop]: val
    //     })

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
        const {updateId, updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
        console.log(this.props)
        return (
            <div className='wizardOne'>
                <h6><input className='houseId' onChange={(e) => updateId(e.target.value)} />New Property ID</h6>
                <h6><input className='propertyName' onChange={(e) => updateName(e.target.value)} />Property Name</h6>
                <h6><input className='address' onChange={(e) => updateAddress(e.target.value)} />Address</h6>
                <h6><input className='city' onChange={(e) => updateCity(e.target.value)} />City</h6>
                <h6><input className='state' onChange={(e) => updateState(e.target.value)} />State</h6>
                <h6><input className='zip' onChange={(e) => updateZip(e.target.value)} />Zip</h6>



                <Link to='/wizard/step2'><button className="nextButton">
                    Next Step
                    </button></Link>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {id, name, address, city, state, zip} = reduxState;
    return{
        id,
        name,
        address,
        city, 
        state,
        zip
    }
};

const outputActions= {updateId, updateName, updateAddress, updateCity, updateState, updateZip}

export default connect(mapStateToProps, outputActions )(Wizard1);