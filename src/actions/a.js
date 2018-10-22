import * as Types from 'actions/ActionTypes';
import callApis from 'utils/CallAPI/apiCaller';

const getParamFromObject=(object)=>{
    if(object===null) return '';
    var param='?';
    var keyObject=Object.keys(object);
    var i;
    for( i=0; i<keyObject.length; i++){
        param+=(keyObject[i]+"="+object[keyObject[i]])+'&';
    }
    return param.substring(0,param.length-1);
}
export const handleAPI=(methodType,objectParam)=>{
    switch(methodType){
        case 'ADD_API':
            return actAddObject(objectParam);
        case 'UPDATE_API':
            return actUpdateObject(objectParam);
        case 'FIND_API':
            return actFindObject(objectParam);
        case 'DELETE_API':
            return actDeleteObject(objectParam);
        case 'INFO_API':
            return loadData(objectParam);
        
        default : return loadData(objectParam);
    }
}
 const loadData=(objectParam)=>{
    var total =0;
    return (dispatch) => {
        dispatch(actFetching(true));
        callApis(objectParam.endpointAPICount+getParamFromObject(objectParam.objCount)+'', 'GET', null,objectParam.accesstoken).then(res => {
            total = res.data;
           console.log(objectParam.endpointAPICount+getParamFromObject(objectParam.objCount)+'123546'); 
        });
        return callApis(objectParam.endpointAPILoad+getParamFromObject(objectParam.objectLoadData)+'', 'GET', null,objectParam.accesstoken).then(res => {
            dispatch(fetchingObject(res.data,
                objectParam.objectLoadData.pageNow,
                objectParam.objectLoadData.page,
                total,
                objectParam.ActionType
            ));
            dispatch(actFetching(false));
        });
    };
}
 const actAddObject = (objectParam) => {
    return (dispatch) => {
        dispatch(actFetching(true));
        return callApis(objectParam.endpointAPI, 'POST', objectParam.objData,objectParam.accesstoken).then(res => {
            loadData(objectParam.objectLoadData);
            dispatch(actFetching(false));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

 const fetchingObject = (myobj,pageIndex,pageSize,totalData,ActionType) => {
    
    return {
        type: ActionType,
        myobj,
        pageIndex,
        pageSize,
        totalData
    }
}

 const actUpdateObject = (objectParam) => {
    return (dispatch) => {
        dispatch(actFetching(true));
        return callApis(objectParam.endpointAPI+getParamFromObject(objectParam.id)+'', 'PUT', objectParam.objData,objectParam.accesstoken).then(() => {
            loadData(objectParam.objectLoadData);
            dispatch(actFetching(false));
        });
    }
}

 const actFetching = (isFetchingObject) => {
    return {
        type: Types.IS_FETCHING_ORGAN,
        isFetchingObject
    }
};

 const actDeleteObject = (objectParam) => {
    return (dispatch) => {
        return callApis(objectParam.endpointAPI+getParamFromObject(objectParam.id)+'', 'DELETE', null,objectParam.accesstoken).then(() => {
            loadData(objectParam.objectLoadData);
            dispatch(actFetching(false));
        }).catch(err => {
            return (err);
        });
    }
};
 const actFindObject= (objectParam) => {
    return (dispatch) => {
        return callApis(objectParam.endpointAPI+getParamFromObject(objectParam.id)+'', 'GET',objectParam.accesstoken).then((res) => {
            dispatch(actionFindObject(res.data,objectParam.actType));
        });
    }
}
 const actionFindObject = (obj,actType) => {
    return {
        type: actType,
        obj,
    }
}