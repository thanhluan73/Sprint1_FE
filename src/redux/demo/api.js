import * as Types from 'actions/ActionTypes';
var organData ={
    demo:[],
    itemEdit:{}
};
   
const organzation = (state = organData, action) => {
    switch (action.type) {
        case Types.FETCHING_ORGAN: 
            return {...state,demo:action.myobj};
        case Types.FIND_ORGAN: 
            return {...state,itemEdit:action.obj};
        default: return {...state};
        }
    };

export default organzation;