import styled from 'styled-components';
import Logo from 'images/image-cpn/logo.png';
// import { palette, font } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const LogoWrapper = styled.div`
   width:100%;
   height:46px !important;
   position:absolute;
   left:0;
   top:0;
   background:url(${Logo});
   background-size:contain;
   background-position:center;
   background-repeat:no-repeat;
`;

export default WithDirection(LogoWrapper);
