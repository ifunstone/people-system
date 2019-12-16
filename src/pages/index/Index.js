import React, { Component } from "react";
import { Router, Route, Switch, Link } from "dva/router";
import { connect } from "dva";
import "@/styles/index.less";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Pagination
} from "antd";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class Index extends Component {
  constructor() {
    super();
    this.state = {
      pageNum: '',
      params: {
        page: 0,
        size: 20,
        type: 10,
        unitIndexCode: 33042164002160000005
      }
    };
  }
  componentDidMount() {
    this.fetchTypeList();
    this.fetchPageList();
    // console.log(dispatch, separateTypeList)
  }

  fetchPageList() {
    const { dispatch } = this.props;
    dispatch({
      type: "separate/pageList",
      params: this.state.params
    });
  }

  fetchTypeList() {
    const { dispatch } = this.props;
    dispatch({
      type: "separate/typeList"
    });
  }

  updateListByPageNum(value) {
    this.state.params.page = value;
    this.fetchPageList();
    // alert(value + "updateListByPageNum");
  }

  paginationChange(value) {
    this.state.params.page = value;
    this.fetchPageList();
  }

  separateTypeChange(value) {
    this.state.params.type = value;
    this.fetchPageList();
    // alert(value + "separateTypeChange");
  }

  streetCodeChange(value) {
    this.state.params.unitIndexCode = value;
    this.fetchPageList();
    // alert(value + "streetCodeChange");
  }

  pageSizeChange(value) {
    this.state.params.size = value;
    this.fetchPageList();
    // alert(value + "pageSizeChange");
  }

  pageNumInputChange(event) {
    console.log(event.target.value);
    this.setState({
      pageNum: event.target.value
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      separateTypeList,
      separatePageList,
      PAGE_SIZE_LIST
    } = this.props.separate;
    const separatePageListData = separatePageList.data || {};
    const peopleInfoList = separatePageListData.content || [];
    console.log(this.props);
    // const { autoCompleteResult } = this.state;

    const SELECT_WIDTH = 220;
    return (
      <div className="ja-layout">
        <div className="ja-content">
          <div style={{ padding: "15px 30px" }} className="ja-content-inner">
            <ul className="ja-person-card">
              {peopleInfoList.map((item, peopleInfoIndex) => {
                return (
                  <li key={item.id} className={{ selected: false }}>
                    <Link to={"/detail/" + peopleInfoIndex}>
                      <div className="ja-person-info">
                        <img src={item.picUrl || "./logo192.png"}></img>
                        <ul className="ja-person-info-list">
                          <li className="user-name">{item.name || "曹平"}</li>
                          <li>
                            <i className="ja-icon ja-idcard-icon"></i>
                            {item.certificateNumber || ""}
                          </li>
                          <li>
                            <i className="ja-icon ja-circle-with-wave-icon"></i>
                            连续{item.unAppearDays}天未出现
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="ja-header">
          <Row>
            <Col span={21}>
              <Form layout="inline">
                <Form.Item label="分离类型">
                  <Select
                    placeholder="请选择"
                    style={{ width: SELECT_WIDTH }}
                    onChange={this.separateTypeChange.bind(this)}
                  >
                    {separateTypeList
                      ? separateTypeList.map((item, key) => {
                          return (
                            <Option key={key} value={item.key}>
                              {item.value}
                            </Option>
                          );
                        })
                      : null}
                  </Select>
                </Form.Item>

                <Form.Item label="小区编码">
                  <Select
                    placeholder="请选择"
                    style={{ width: SELECT_WIDTH }}
                    onChange={this.pageSizeChange.bind(this)}
                  >
                    {/* <Option value=""></Option> */}
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            <Col span={3}>
              {/* <Form>
                <Form.Item style={{ float: "right" }}>
                  <Button icon="search">打印</Button>
                </Form.Item>
              </Form> */}
            </Col>
          </Row>
        </div>
        <div className="ja-footer">
          <Row>
            <Col span={6}>
              <span className="ja-text-middle">
                共{separatePageList.count}条数据
              </span>
              <span className="ja-text-middle">每页</span>
              <Select
                defaultValue={20}
                style={{ width: 60 }}
                onChange={this.pageSizeChange.bind(this)}
              >
                {PAGE_SIZE_LIST.map(sizeItem => {
                  return (
                    <Option value={sizeItem} key={sizeItem}>
                      {sizeItem}
                    </Option>
                  );
                })}
              </Select>
            </Col>
            <Col span={18}>
              <div style={{ float: "right", lineHeight: "30px" }}>
                <Button
                  className="ja-float-right"
                  onClick={this.updateListByPageNum.bind(this)}
                >
                  跳转
                </Button>
                <span className="ja-text-middle ja-float-right">
                  /{separatePageList.totalPages}页
                </span>
                <Input
                value={this.state.pageNum}
                  onChange={this.pageNumInputChange.bind(this)}
                  className="ja-float-right"
                  style={{ width: "40px", margin: "0 10px" }}
                ></Input>
                <span className="ja-text-middle ja-float-right">跳转至</span>
                <Pagination
                  onChange={this.paginationChange.bind(this)}
                  pageSize={separatePageList.size}
                  defaultCurrent={separatePageList.page + 1}
                  total={separatePageList.count}
                  className="ja-float-right"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default connect(({ separate }) => ({
  separate
}))(Form.create()(Index));
