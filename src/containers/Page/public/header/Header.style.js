import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const HeaderWrapper = styled.div`
   background-color:${palette("color", 4)};
   position:fixed;
   left:0;
   top:0;
   width:100%;
   z-index:10000;
   *{
       height:100%;
   }
   .ant-menu{
       background:none !important;
       .ant-menu-item-selected{
           background:none !important;
           a{
               color:${palette("color", 14)} !important;
               font-weight:900;
           }
       }
   }
   .right-pane{
       display:flex;
       align-content:flex-start;
       justify-content:space-between;
       align-items:center;
       padding-right:20px !important;
       .btn-group__right{
           .ant-btn{
               margin:0px 5px;
               &.ant-btn-default{
                   background:none !important;
                   color:rgba(255, 255, 255, 0.7);
                   border:none !important;
                   &:hover{
                       color:${palette('secondary', 2)}
                   }
               }
           }
       }
   }
`;

export default WithDirection(HeaderWrapper);
