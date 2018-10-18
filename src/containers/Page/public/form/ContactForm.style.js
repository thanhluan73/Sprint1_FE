import styled from 'styled-components';
import WithDirection from 'settings/withDirection';
const ContactFormWrapper = styled.div`
    .ant-form-item{
        margin-bottom:15px;
        .ant-form-item-label{
            font-weight:600;
        }
    }
    button[type="submit"]{
        width:100%;
    }
`;

export default WithDirection(ContactFormWrapper);
