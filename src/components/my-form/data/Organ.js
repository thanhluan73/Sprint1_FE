export const styles="text-align:center";
export const listButton =[
    {
        name:"Submit",
        title:"Submit",
        description:"Submit data from your form",
        onClick:()=>console.log("submit"),
        events:()=>console.log("event form"),
        styles:{
            color:'cyan',
            margin:'5px'
        },
        type:"SUBMIT",
        icon:"save",
        typeButon:"primary"
    },
    {
        name:"Back",
        title:"Back",
        description:"Back",
        onClick:()=>console.log("back"),
        events:()=>console.log("event form"),
        styles:{
            color:'red',
            margin:'5px'
        },
        type:"BACK",
        icon:"rollback",
        typeButon:"primary"
    },
]
export const listField=[
    {
        id:"organID",
        label:"Organzation name:",
        description:"Tên của tổ chức bạn.",
        icon:"user",
        placeholder:"Enter organzation name.",
        event:{
            onClick:()=>console.log("event onClick "),
            onChange:()=>console.log("event onChange "),
        },
        fieldType:{
            type:"INPUT_TEXT",
        }
    },
    {
        id:"organAddress",
        label:"Organzation Address:",
        description:"Địa chỉ của tổ chức bạn.",
        icon:"address",
        placeholder:"Enter organzation address.",
        event:{
            onClick:()=>console.log("event onClick "),
            onChange:()=>console.log("event onChange "),
        },
        fieldType:{
            type:"TEXT_AREA",
        }
    },
    {
        id:"phoneNumber",
        label:"Phone number:",
        description:"Số điện thoại liên hệ",
        icon:"phone",
        placeholder:"Enter organzation phone number.",
        event:{
            onClick:()=>console.log("event onClick "),
            onChange:()=>console.log("event onChange "),
        },
        fieldType:{
            type:"NUMBER",
        }
    },
]