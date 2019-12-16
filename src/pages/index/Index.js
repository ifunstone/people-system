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
      pageNum: ''
    };
  }
  componentDidMount() {
    const { dispatch, separateTypeList } = this.props;
    dispatch({
      type: "separate/typeList"
    });
    dispatch({
      type: "separate/pageList"
    });
    // console.log(dispatch, separateTypeList)
  }

  updateListByPageNum(value) {
    alert(value + 'updateListByPageNum')
  }

  paginationChange(value) {

  }

  separateTypeChange(value) {
    alert(value + 'separateTypeChange')
  }

  streetCodeChange(value) {
    alert(value + 'streetCodeChange')
  }

  pageSizeChange(value) {
    alert(value + 'pageSizeChange')
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { separateTypeList, separatePageList, PAGE_SIZE_LIST } = this.props.separate;
    const separatePageListData = separatePageList.data || {};
    const peopleInfoList =
      separatePageListData.content || [];
    console.log(this.props);
    // const { autoCompleteResult } = this.state;

    const SELECT_WIDTH = 220;
    return (
      <div className="ja-layout">
        <div className="ja-content">
          <div style={{ padding: "15px 30px" }} className="ja-content-inner">
            <ul className="ja-person-card">
              {peopleInfoList.map((item, peopleInfoIndex)  => {
                return (
                  <li key={item.id} className={{selected: false}}>
                    <Link to={'/detail/' + peopleInfoIndex}>
                      <div className="ja-person-info">
                        <img src={item.picUrl || './logo192.png'}></img>
                        <ul className="ja-person-info-list">
                          <li className="user-name">{item.name || '曹平'}</li>
                          <li>
                            <i className="ja-icon ja-idcard-icon"></i>
                            {item.certificateNumber || ''}
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
                  <Select placeholder="请选择" style={{ width: SELECT_WIDTH }} onChange={this.separateTypeChange}>
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
                  <Select placeholder="请选择" style={{ width: SELECT_WIDTH }} onChange={this.pageSizeChange}>
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
              <span className="ja-text-middle">共{separatePageList.count}条数据</span>
              <span className="ja-text-middle">每页</span>
              <Select defaultValue={20} style={{ width: 60 }} onChange={this.streetCodeChange}>
                {PAGE_SIZE_LIST.map((sizeItem) => {
                  return <Option value={sizeItem} key={sizeItem}>{sizeItem}</Option>
                })}
              </Select>
            </Col>
            <Col span={18}>
              <div style={{ float: "right", lineHeight: "30px" }}>
                <Button className="ja-float-right" onClick={this.updateListByPageNum}>跳转</Button>
                <span className="ja-text-middle ja-float-right">/{separatePageList.totalPages}页</span>
                <Input
                  // value={this.state.pageNum}
                  className="ja-float-right"
                  style={{ width: "40px", margin: "0 10px" }}
                ></Input>
                <span className="ja-text-middle ja-float-right">跳转至</span>
                <Pagination
                  onChange={this.paginationChange}
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
