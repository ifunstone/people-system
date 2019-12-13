import React, { Component } from "react";
import "../../styles/index.less";
import "../../styles/detail.less";

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

class Detail extends Component {
  render() {
    return (
      <div className="ja-detail-layout">
        <div className="ja-detail-info-layer">
          <div className="ja-person-img">
            <img src="./logo192.png"></img>
          </div>
          <div className="ja-person-info-detail">
            <p className="ja-person-name">曹平</p>
            <ul className="ja-person-info-list">
              <li>
                <i className="ja-icon ja-idcard-icon"></i>330480198703091203
              </li>
              <li>
                <i className="ja-icon ja-phone-icon"></i>13819942356
              </li>
              <li>
                <i className="ja-icon ja-circle-with-wave-icon"></i>自2019-09-02
                起连续<b>18</b>天未出现
              </li>
              <li>
                <i className="ja-icon ja-home-icon"></i>
                浙江省宁波市象山县xxx社区3幢2单元1303
              </li>
            </ul>
          </div>
          <div className="ja-person-info-operate">
            <button className="ja-static-button ja-static-button_primary">
              全息档案
            </button>
            <button className="ja-static-button ja-static-button_worning">
              误报
            </button>
          </div>
        </div>
        <div className="ja-detail-info-content">
          <Row>
            <Col span="16">
              <div className="ja-detail-item">
                <div className="ja-detail-item_content_left">
                  <ul className="ja-baseinfo-list">
                    <li>
                      <span className="ja-item-label">抓拍时间</span> 
                      <span className="ja-item-value">2019-09-20 12:23:06</span> 
                    </li>
                    <li>
                      <span className="ja-item-label">抓拍地点</span> 
                      <span className="ja-item-value">xxxxxx</span> 
                    </li>
                  </ul>
                  <div className="ja-baseinfo-des">
                  最后一次出现在该小区
                  </div>
                </div>
              </div>
            </Col>
            <Col span="8">
              <div className="ja-detail-item ja-detail-item_right">
                <div className="ja-detail-item_content_right">

                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Form.create()(Detail);
