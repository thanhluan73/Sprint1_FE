import * as Types from 'actions/ActionTypes';
var organData =[];
   
const organzation = (state = organData, action) => {
    switch (action.type) {
        case Types.FETCHING_ORGAN: 
            return action.myobj;
        default: return [...state];
        }
    };

export default organzation;