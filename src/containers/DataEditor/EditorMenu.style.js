import styled from 'styled-components';
import { palette, font } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const EditorMenuWrapper = styled.div`
    .custom__menu{
        border:none;
        .custom__menu-item{
            padding:0 !important;
        }
        .custom__group-menu{
            padding:0 !important;     
            .ant-menu-item-group-title{
                padding:5px 0px !important;
                font-weight:900;
                letter-spacing:0.5px;
                text-transform:uppercase;
                font-size:18px;
                color:${palette('text', 0)};
                &::hover{
                    cursor:default;
                }
                *{
                    font-size:1em;
                }
            }
            .ant-menu-submenu-arrow{
                right:0;
                font-size:${font.size__lg};
            }
            .custom__menu-item{
                &:hover, &.selected{
                    background-color:#ffeaa7;
                    transition:0.5s;
                    a{
                        padding-left:5px;
                        transition:0.5s;
                    }
                }
            }
        }
    }
`;

export default WithDirection(EditorMenuWrapper);
