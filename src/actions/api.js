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
export const handleAPI=(objectParam,objectData)=>{
    switch(objectParam.methodType){
        case 'ADD_API':
            return actAddObject(objectParam,objectData);
        case 'UPDATE_API':
            return actUpdateObject(objectParam,objectData);
        case 'FIND_API':
            return actFindObject(objectParam,objectData);
        case 'DELETE_API':
            return actDeleteObject(objectParam,objectData);
        case 'INFO_API':
            return loadData(objectParam);
        
        default : return loadData(objectParam);
    }
}
 const loadData=(objectParam)=>{
    var total =0;
    return (dispatch) => {
        dispatch(actFetching(true));
        return callApis(objectParam.endpointAPI+getParamFromObject(objectParam.objectLoadData)+'', 'GET', null,objectParam.accesstoken).then(res => {
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
 const actAddObject = (objectParam,objectData) => {
     var total=0;
    return (dispatch) => {
        dispatch(actFetching(true));
        return callApis(objectParam.endpointAPI, 'POST', objectData,objectParam.accesstoken).then((res) => {
            return callApis(objectParam.objectLoadData.endpointAPI+getParamFromObject(objectParam.objectLoadData.objectLoadData)+'', 'GET', null,objectParam.accesstoken).then(res => {
                dispatch(fetchingObject(res.data,
                    objectParam.objectLoadData.pageNow,
                    objectParam.objectLoadData.page,
                    total,
                    objectParam.ActionType
                ));
            dispatch(actFetching(false));
        }).catch(error => console.log("Fetch Error "+ error));
    });
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

 const actUpdateObject = (objectParam,objData) => {
    
     var total=0;
    return (dispatch) => {
        dispatch(actFetching(true));
        return callApis(objectParam.endpointAPI+getParamFromObject(objData.id)+'', 'PUT', objData.data,objectParam.accesstoken).then(() => {
            return callApis(objectParam.objectLoadData.endpointAPI+getParamFromObject(objectParam.objectLoadData.objectLoadData)+'', 'GET', null,objectParam.accesstoken).then(res => {
                dispatch(fetchingObject(res.data,
                    objectParam.objectLoadData.pageNow,
                    objectParam.objectLoadData.page,
                    total,
                    objectParam.ActionType
                ));
            dispatch(actFetching(false));
        });
    });
    }
}

 const actFetching = (isFetchingObject) => {
    return {
        type: Types.IS_FETCHING_ORGAN,
        isFetchingObject
    }
};

 const actDeleteObject = (objectParam,objectData) => {
     var total=0;
    return (dispatch) => {
        return callApis(objectParam.endpointAPI+getParamFromObject(objectData)+'', 'DELETE', null,objectParam.accesstoken).then(() => {
            return callApis(objectParam.objectLoadData.endpointAPI+getParamFromObject(objectParam.objectLoadData.objectLoadData)+'', 'GET', null,objectParam.accesstoken).then(res => {
                dispatch(fetchingObject(res.data,
                    objectParam.objectLoadData.pageNow,
                    objectParam.objectLoadData.page,
                    total,
                    objectParam.ActionType
                ));
            dispatch(actFetching(false));
        }).catch(err => {
            return (err);
        });
    });
};
 }
 const actFindObject= (objectParam,objectData) => {
    return (dispatch) => {
        return callApis(objectParam.endpointAPI+'/'+objectData.id, 'GET',objectParam.accesstoken).then((res) => {
            dispatch(actionFindObject(res.data,objectParam.ActionType));
        });
    }
}
 const actionFindObject = (obj,actType) => {
    return {
        type: actType,
        obj,
    }
}