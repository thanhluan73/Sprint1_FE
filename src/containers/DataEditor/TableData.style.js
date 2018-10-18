import styled from 'styled-components';
// import { palette, font } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const TableDataWrapper = styled.div`
    .table-data__section{
        margin-bottom:20px;
        button.ant-input-search-button{
            border-radius:0px 5px 5px 0px;
        }
        &.table-data__data-list{
            .table-data__button-group{
                visibility:hidden;
            }
            .ant-table-row:hover .table-data__button-group{
                visibility:visible;
            }
        }
    }
`;

export default WithDirection(TableDataWrapper);
