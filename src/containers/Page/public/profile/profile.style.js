import styled from 'styled-components';
// import { palette } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const ProfileWrapper = styled.div`
    padding:60px 5%;
    font-size:18px;
    .profile-sidebar{
        border-right:1px solid #f2f2f2;
        .profile-menu{
            padding:15px 0px;
            text-align:right;
            .profile-menu-title .ant-menu-item-group-title{
                width:100%;
                background:#34495e;
                color:white;
                font-size:0.875em;
                text-transform:uppercase;
                font-weight:900;
                padding:5px 15px;
            }
        }
    }
`;

export default WithDirection(ProfileWrapper);
