import styled from 'styled-components';
import WithDirection from 'settings/withDirection';
const FooterWrapper = styled.div`
    background:#f2f2f2;
   .footer-content{
        padding:60px 5%;
   }
   .ant-menu{
       border:none;
       background:none;
       .ant-menu-item-group-title{
           color:rgba(0,0,0,0.87);
           font-weight:900;
           font-size:18px;
           margin-bottom:0.5em;
           padding:0;
        }      
        .ant-menu-item, .ant-menu-item-selected{
            padding:0 !important;
            line-height:1.5;
            height:auto;
            border:none;
            color:rgba(0,0,0,0.54);
            font-size:14px;
            background:none !important;
            margin:1em 0 !important;
            &:after{
                display:none;
            }
            &:hover{
                text-decoration:underline;
            }
       }
   }
   .footer-bottom{
       background:rgba(0,0,0,0.05);
       text-align:center;
       padding:5px;
   }
`;

export default WithDirection(FooterWrapper);
