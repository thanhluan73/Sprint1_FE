import * as ActionTypes from 'redux/demo/contants/ActionType';
import * as methodType from 'actions/MethodType';
import * as enpointAPI from './endpointAPI';
import {ACCESS_TOKEN} from 'settings/sessionStorage';
export const loadObj={
    methodType:methodType.INFO_API,
    endpointAPI:enpointAPI.GET_USER,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    objectLoadData:{
        
    },
    ActionType:ActionTypes.FETCHING_ORGAN
}
export const addObj={
    methodType:methodType.ADD_API,
    endpointAPI:enpointAPI.ADD_USER,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.FETCHING_ORGAN
}