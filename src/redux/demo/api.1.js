import * as Types from 'actions/ActionTypes';
var organData =[
    { 
        name:'Proptech Plus',
        describe:'Công ty cổ phần công nghệ bất động sản',
        address:'628 xa lộ Hà Nội, Oxygen lầu 2 phòng A01-A02',
        phoneNumber:'01643081355'
    }
];
   
var arr =[];
const organzation = (state = organData, action) => {
    var { organ } = action;
    var arrTemp=[];
    switch (action.type) {
        case Types.ADD_ORGAN:
            return [...organData];
        case Types.FETCHING_ORGAN: 
            var sumTotal = action.totalData;
            arrTemp = new Array(sumTotal);
            arrTemp.fill(0);
            var pageId=action.pageIndex;
            if(pageId===1){
                for (let i = 0; i < action.myobj.length; i++) {
                    arrTemp[i]=action.myobj[i];
                } 
                arr=arrTemp; 
                return arrTemp; 
            }
            var pageSize = action.pageSize;
            for (var i = 0; i < action.myobj.length; i++) {
               arr[(pageId-1)*pageSize+i]=action.myobj[i];
            }
           
            return arr;
        case Types.FIND_ORGAN:
            return action.organ;
        default: return [...state];
        }
    };

export default organzation;