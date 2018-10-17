import {Button,Icon,Tooltip  } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
const triggerTooltip="hover";
const placementTooltip="topLeft";
const overlayClassNameTooltip="numeric-input";
export const ButtonTypeSubmit =(val) =>{
    return <Tooltip
                trigger={triggerTooltip}
                title={val.description}
                placement={placementTooltip}
                overlayClassName={overlayClassNameTooltip}
            >
                <Button htmlType="submit" type={val.typeButon} size={val.size} loading={val.loading} >
                    <Icon type={val.icon} theme="outlined" /> {val.title}
                </Button>
            </Tooltip>
}
export const ButtonTypeBack =(val) =>{
    return <Tooltip
                trigger={triggerTooltip}
                title={val.description}
                placement={placementTooltip}
                overlayClassName={overlayClassNameTooltip}
            >
                {
                    (val.link!==undefined)?
                    <Link to={(val.link!==undefined)?val.link:'/'}>
                        <Button type={val.typeButon} size={val.size}>
                            <Icon type={val.icon} theme="outlined" /> Back
                        </Button>
                    </Link>
                    :
                    <Button type={val.typeButon} size={val.size} onClick={val.onClick}>
                        <Icon type={val.icon} theme="outlined" /> Back
                    </Button>
                }
            </Tooltip>
}