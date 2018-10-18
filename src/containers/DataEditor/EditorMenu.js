import { Menu } from "antd";
import IntlMessages from 'components/utility/intlMessages';
import PanelWrapper from "containers/Custom/Panel.style";
import EditorMenuWrapper from "containers/DataEditor/EditorMenu.style";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//const define
const MenuItemGroup = Menu.ItemGroup;
const stripTrailingSlash = str => {
    if (str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
};

export default class extends Component {

    getMenuItem = (singleOption) => {
        const { key, label, children } = singleOption;
        const url = stripTrailingSlash(this.props.url);
        if (children) {
            return (
                <MenuItemGroup className='custom__group-menu'
                    key={key}
                    title={
                        <IntlMessages id={label} />
                    }
                >
                    {children.map(child => {
                        const linkTo = child.withoutDashboard
                            ? `/${child.key}`
                            : `${url}/${child.key}`;
                        return (
                            <Menu.Item className='custom__menu-item' key={child.key}>
                                <Link to={linkTo}>
                                    <IntlMessages id={child.label} />
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </MenuItemGroup>
            );
        }
        return (
            <Menu.Item className='custom__menu-item' key={key}>
                <Link to={`${url}/${key}`}>
                    <span className="isoMenuHolder">
                        <span className="nav-text">
                            <IntlMessages id={label} />
                        </span>
                    </span>
                </Link>
            </Menu.Item>
        );
    };
    render() {
        const options = this.props.options;
        return (
            <PanelWrapper>
                <EditorMenuWrapper>
                    <Menu className='custom__menu' mode='inline' >
                        {options.map(singleOption =>
                            this.getMenuItem(singleOption)
                        )}
                    </Menu>
                </EditorMenuWrapper>
            </PanelWrapper>
        );
    }
}