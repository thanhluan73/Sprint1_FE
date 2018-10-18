import { Button, Input, Table } from 'antd';
import React from 'react';
import TableDataWrapper from './TableData.style';
import Link from 'react-router-dom/Link';
import { cleanText } from 'helpers/utility';

const Search = Input.Search;
export default class extends React.Component {

    state = {
        columns: this.props.columns,
        data: this.props.dataArr,
        // user for search
        loadedData: this.props.dataArr,
        searchAttr: this.props.searchAttr
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.dataArr, loadedData: nextProps.dataArr })
    }

    handleSearchOnChange = (e) => {
        this.searchOnTable(e.target.value);
    }

    handleSearchByValue = (val) => {
        this.searchOnTable(val);
    }

    searchOnTable = (val) => {
        val = cleanText(val);
        this.setState(({ loadedData }) => {
            return {
                data: loadedData.filter(item => item[this.state.searchAttr].includes(val))
            };
        });
    }
    render() {
        return (
            <TableDataWrapper>
                {/* buttons */}
                <div className="table-data__section">
                    <Link to={'/dashboard/tag/add-new'}>
                        <Button type="primary" size="default" icon="plus">
                            Add new
                        </Button>
                    </Link>
                </div>
                {/* search input */}
                <div className="table-data__section">
                    <Search
                        placeholder="Input search text..."
                        onSearch={val => this.handleSearchByValue(val)}
                        // enterButton
                        onChange={this.handleSearchOnChange}
                        size="default"
                    />
                </div>
                {/* data list */}
                <div className="table-data__section table-data__data-list">
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.data}
                        size="small"
                        pagination={
                            {
                                pageSize: 10,
                                size: "small",
                                total: this.state.data ? this.state.data.length : 0
                            }}
                        scroll={{ y: 300 }} />
                </div>
            </TableDataWrapper>
        );
    }
}