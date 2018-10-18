import styled from 'styled-components';
// import { palette } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const InfoCardWrapper = styled.div`   
    font-size:18px;
    color:rgba(0,0,0, 0.87);
    line-height:1.36em;
    border-bottom:1px solid #f2f2f2;
    .profile-name{
        font-size:1em;
        font-weight:900;
        letter-spacing:0.5px;
    }
    .profile-role{
        font-size:0.75em;
        color:rgba(0,0,0,0.54);
        font-weight:400;
    }
    .profile-contact{
        font-size:0.75em;
    }
`;

export default WithDirection(InfoCardWrapper);
