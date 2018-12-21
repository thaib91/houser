import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import House from '../House/House';



export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/houses')
            .then(res => {
                console.log(res)
                this.setState({
                    houses: res.data
                })
                console.log(this.state.houses)
            })
    }

    deletePost = (id) => {
        axios.delete(`/api/house/${id}`)
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
    }



    render() {
        let displayHome = this.state.houses.map(house => {
            return (
                <div>
                <House
                    key={house.id}
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    deletePost={this.deletePost}
                />
                
                </div>
            )
        })

        return (
            <div className="dashboardPage">
                Dashboard!
            <Link to='/wizard'>
                    <button className="addNewButton">
                        Add New Property
                </button>
                </Link>

                {displayHome}

            </div>
        )
    }
}