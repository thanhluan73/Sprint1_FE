import styled from 'styled-components';
// import { palette, font } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const ResponsiveIMGWrapper = styled.div`
   position:relative;
   background-position:center center;
   background-repeat:no-repeat;
   background-size:cover;
`;

export default WithDirection(ResponsiveIMGWrapper);
