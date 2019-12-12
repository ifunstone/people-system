import React, { Component } from "react";
import "./index.less";

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
  Card
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
          <div style={{ padding: "15px 30px" }}>
            <ul className="ja-person-card">
                <li>

                </li>
                <li className="selected">

                </li>
                <li>

                </li>
                <li className="selected">

                </li>
                <li className="selected">

                </li>
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
        <div className="ja-footer">Footer</div>
      </div>
    );
  }
}
export default Form.create()(Index);
