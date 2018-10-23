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
export const delObj={
    methodType:methodType.DELETE_API,
    endpointAPI:enpointAPI.DELETE_USER,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.FETCHING_ORGAN
}
export const updateObj={
    methodType:methodType.UPDATE_API,
    endpointAPI:enpointAPI.UPDATE_USER,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.FETCHING_ORGAN
}
export const findObj={
    methodType:methodType.FIND_API,
    endpointAPI:enpointAPI.FIND_USER,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.FIND_ORGAN
}
export const searchObj={
    methodType:methodType.FIND_API,
    endpointAPI:enpointAPI.FIND_USER,
    objectLoadData:loadObj,
    accesstoken:sessionStorage.getItem(ACCESS_TOKEN),
    ActionType:ActionTypes.FIND_ORGAN
}