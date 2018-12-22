let initialState = {
    id: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

const UPDATE_ID = 'UPDATE_ID';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';


export function updateId(id) {
    return {
        type: UPDATE_ID,
        payload: id
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}






// id: 0,
// name: '',
// address: '',
// city: '',
// state: '',
// zip: 0,
// img: '',
// mortgage: 0,
// rent: 0


export default function reducer(reduxState = initialState, action) {
    switch (action.type) {
        case UPDATE_ID:
            return Object.assign({}, reduxState, { id: action.payload });
        case UPDATE_NAME:
            return Object.assign({}, reduxState, { name: action.payload });
        case UPDATE_ADDRESS:
            return Object.assign({}, reduxState, { address: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, reduxState, { city: action.payload });
        case UPDATE_STATE:
            return Object.assign({}, reduxState, { state: action.payload });
        case UPDATE_ZIP:
            return Object.assign({}, reduxState, { zip: action.payload });
        case UPDATE_IMG:
            return Object.assign({}, reduxState, { img: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign({}, reduxState, { mortgage: action.payload});
        case UPDATE_RENT:
            return Object.assign({}, reduxState, { rent: action.payload });
        default: return reduxState;
    }
}