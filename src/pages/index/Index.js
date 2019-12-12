import React, { Component } from "react";
import "./index.less";
import PERSON_IMAGE from "./../../assets/images/idcard-icon.png";

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
  render() {
    const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

    const SELECT_WIDTH = 220;
    return (
      <div className="ja-layout">
        <div className="ja-content">
          <div style={{ padding: "15px 30px" }} className="ja-content-inner">
            <ul className="ja-person-card">
              <li>
                <div className="ja-person-info">
                  <img src="./logo192.png"></img>
                  <ul className="ja-person-info-list">
                    <li className="user-name">曹平</li>
                    <li>
                      <i className="ja-icon ja-idcard-icon"></i>
                      330480198703091203
                    </li>
                    <li>
                      <i className="ja-icon ja-circle-with-wave-icon"></i>
                      连续18天未出现
                    </li>
                  </ul>
                </div>
              </li>
              <li className="selected">
                <div className="ja-person-info">
                  <img src="./logo192.png"></img>
                  <ul className="ja-person-info-list">
                    <li className="user-name">曹平</li>
                    <li>
                      <i className="ja-icon ja-idcard-icon"></i>
                      330480198703091203
                    </li>
                    <li>
                      <i className="ja-icon ja-circle-with-wave-icon"></i>
                      连续18天未出现
                    </li>
                  </ul>
                </div>
              </li>
              <li></li>
              <li className="selected"></li>
              <li className="selected"></li>
            {/* </ul>
            <ul className="ja-person-card"> */}
              <li>
                <div className="ja-person-info">
                  <img src="./logo192.png"></img>
                  <ul className="ja-person-info-list">
                    <li className="user-name">曹平</li>
                    <li>
                      <i className="ja-icon ja-idcard-icon"></i>
                      330480198703091203
                    </li>
                    <li>
                      <i className="ja-icon ja-circle-with-wave-icon"></i>
                      连续18天未出现
                    </li>
                  </ul>
                </div>
              </li>
              <li className="selected"></li>
              <li></li>
              <li className="selected"></li>
              <li className="selected"></li>
            </ul>
          </div>
        </div>
        <div className="ja-header">
          <Row>
            <Col span={21}>
              <Form layout="inline">
                <Form.Item label="搬离类型">
                  <Select placeholder="请选择" style={{ width: SELECT_WIDTH }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="处理状态">
                  <Select
                    defaultValue="lucy"
                    placeholder="未处理"
                    style={{ width: SELECT_WIDTH }}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">未处理</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="搬离类型">
                  <Select placeholder="全部" style={{ width: SELECT_WIDTH }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            <Col span={3}>
              <Form>
                <Form.Item style={{ float: "right" }}>
                  <Button icon="search">打印</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="ja-footer">
          <Row>
            <Col span={6}>
              <span className="ja-text-middle">共94条数据</span>
              <span className="ja-text-middle">每页</span>
              <Select defaultValue="lucy" style={{ width: 60 }}>
                <Option value="jack">10</Option>
                <Option value="lucy">20</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Col span={18}>
              <div style={{ float: "right", lineHeight: "30px" }}>
              <Button className="ja-float-right">跳转</Button>
              
              <span className="ja-text-middle ja-float-right">/5页</span>
              <Input
                className="ja-float-right"
                style={{ width: "40px", margin: "0 10px" }}
              ></Input>
              <span className="ja-text-middle ja-float-right">跳转至</span>
              <Pagination
                defaultCurrent={1}
                total={50}
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
export default Form.create()(Index);