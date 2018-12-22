import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import {updateImg} from '../../ducks/reducer'


class Wizard2 extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         img: ''
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
        const {updateImg} = this.props;
        return (
            <div className='wizardTwo'>

                <h6><input className='img' onChange={(e) => updateImg(e.target.value)} />Image</h6>

                <Link to='/wizard/step1'><button className="nextButton">
                    Previous Step
                    </button></Link>

                <Link to='/wizard/step3'><button className="nextButton">
                    Next Step
                    </button></Link>


            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {img} = reduxState;
    return{
        img
    }
}

export default connect(mapStateToProps, {updateImg})(Wizard2);