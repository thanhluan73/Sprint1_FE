export const styles={
    textAlign:'center',
};
export const listOption=[
    {
        id:"1",
        name:"Binh Thuan",
        description:"Bình Thuận",
        postID:"80000"
    },
    {
        id:"21",
        name:"Thu Duc",
        description:"Thủ Đức",
        postID:"80000"
    },
    {
        id:"31",
        name:"Quan 1",
        description:"Quận 1",
        postID:"80000"
    },
    {
        id:"41",
        name:"Binh Thanh",
        description:"Bình Thạnh",
        postID:"80000"
    },
]
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
    label:"Your name:",
    description:"Tên của bạn.",
    icon:"user",
    defaultValue:'Nguyễn Lê Phong',
    placeholder:"Your name.",
    event:{
        onClick:()=>console.log("event onClick "),
        onChange:()=>console.log("event onChange "),
    },
    fieldType:{
        type:"INPUT_TEXT",
    }
},
{
    id:"placeOfBirdth",
    label:"Place of birdth:",
    description:"Nơi sinh của bạn",
    defaultValue:['21', '1'],
    icon:"contact",
    placeholder:"Place of birdth.",
    event:{
        onClick:()=>console.log("event onClick "),
        onChange:()=>console.log("event onChange "),
        onBlur:()=>console.log("onBlur"),
        onFocus:()=>console.log("onFocus"),
    },
    fieldType:{
        type:"SELECT",
        listOption:{listOption},
        mode:'multiple',
        size:'default',
    }
},
{
    id:"inline",
    fieldType:{
        type:"CHECKBOX",
        size:'default',
        layout:'inline',
        description:"Giới tính của bạn là gì?",
        listCheckbox:[
            {
                label:"FeMale:",
                check:true,
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
            },
            {
                label:"Male:",
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
            },
        ]
    }
},
{
    id:"Nam",
    label:"Male:",
    description:"Giới tính của bạn là gì?",
    icon:"sex",
    event:{
        onClick:()=>console.log("event onClick "),
        onChange:()=>console.log("event onChange "),
    },
    styles:{display:'inline-block'},
    fieldType:{
        type:"CHECKBOX",
        size:'default',
        layout:'vertical',
    }
},
{
    id:"Nữ",
    label:"FeMale:",
    description:"Giới tính của bạn là gì?",
    icon:"sex",
    styles:{display:'inline-block'},
    event:{
        onClick:()=>console.log("event onClick "),
        onChange:()=>console.log("event onChange "),
    },
    fieldType:{
        type:"CHECKBOX",
        size:'default',
        layout:'vertical',
    }
},
{
    id:"has",
    label:"Do you kiss?:",
    description:"Bạn đã hôn bao giờ chưa?",
    icon:"sex",
    event:{
        onClick:()=>console.log("event onClick "),
        onChange:()=>console.log("event onChange "),
    },
    fieldType:{
        type:"SWITCH",
        size:'default',
    }
},

]