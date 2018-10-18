import styled from 'styled-components';
// import { palette, font } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const DataFormWrapper = styled.div`
    .form-header{
        display:flex;
        flex-flow:start wrap;
        justify-content:space-between;
        .form-header__control{
            flex:none;
        }
    }
    .form-body{
        margin-top:20px;
        label{
            font-weight:900;
        }
    }
    .readonly{
        .ant-form-item{
            margin-bottom:0 !important;
        }
    }
    .ant-calendar-picker{
        width:100%;
        
    }
`;

export default WithDirection(DataFormWrapper);
