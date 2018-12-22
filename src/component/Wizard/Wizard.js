import React, { Component } from 'react';
// import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';

export default class Wizard extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         id: 0,
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0,
    //         img: '',
    //         mortgage:0,
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
    //     axios.post('/api/house', {id, name, address, city, state, zip, img, mortgage, rent })
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
        return (
            <div className="wizardPage">
                Wizard!
                <Link to='/'><button className="cancelButton">
                    Cancel
                    </button></Link>

                <Link to='/wizard/step1'><button className="cancelButton">
                    Start
                    </button></Link>

         <Route path='/wizard/step1' component={Wizard1}/>
        <Route path='/wizard/step2' component={Wizard2}/>
        <Route path='/wizard/step3' component={Wizard3}/>

                {/* <div className="inputBoxes">
                <h6><input className='houseId' onChange={(e) => this.handleChange('id', e.target.value)} />New Property ID</h6>
                    <h6><input className='propertyName' onChange={(e) => this.handleChange('name', e.target.value)} />Property Name</h6>
                    <h6><input className='address' onChange={(e) => this.handleChange('address', e.target.value)} />Address</h6>
                    <h6><input className='city' onChange={(e) => this.handleChange('city', e.target.value)} />City</h6>
                    <h6><input className='state' onChange={(e) => this.handleChange('state', e.target.value)} />State</h6>
                    <h6><input className='zip' onChange={(e) => this.handleChange('zip', e.target.value)} />Zip</h6>
                    <h6><input className='img' onChange={(e) => this.handleChange('img', e.target.value)} />Image</h6>
                    <h6><input className='mortgage' onChange={(e) => this.handleChange('mortgage', e.target.value)} />Mortgage</h6>
                    <h6><input className='rent' onChange={(e) => this.handleChange('rent', e.target.value)} />Rent</h6>
                    <button className='completeButton' onClick={this.createPost}>Complete</button>
                </div> */}


            </div>
        )
    }
}