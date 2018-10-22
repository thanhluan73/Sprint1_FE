import {notification } from 'antd';
export const showNotification=(message,description,options,type)=>{
    notification[type]({
        message: message,
        description: description,
    });
    notification.config({
        placement: options,
    });
}