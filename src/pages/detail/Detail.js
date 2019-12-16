import React, { Component } from "react";
import { connect } from "dva";
import { Chart, Axis, Legend, Tooltip, Geom } from "bizcharts";

import { Form, Row, Col } from "antd";

import "@/styles/index.less";
import "@/styles/detail.less";

const data = [{ month: "Jan.", count: 69, city: "tokyo" }];
const scale = {
  month: { alias: "Month" },
  count: { alias: "Sales" }
};

// Chart.setTheme('dark');

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      params: {
        page: 0,
        size: 20,
        type: 10,
        unitIndexCode: 33042164002160000005
      }
    };
  }
  componentDidMount() {
    const { dispatch, separateTypeList } = this.props;
    dispatch({
      type: "separate/pageList",
      params: this.state.params
    });
  }

  render() {
    const { params } = this.props.match;
    const { separateTypeList, separatePageList } = this.props.separate;
    const separatePageListData = separatePageList.data || {};
    const peopleInfoList = separatePageListData.content || [];
    var peopleInfo = {};

    if (peopleInfoList.length) {
      peopleInfo = peopleInfoList[parseInt(params.index)];
    }

    console.log(peopleInfoList, params);

    return (
      <div className="ja-detail-layout">
        <div className="ja-detail-info-layer">
          <div className="ja-detail-info-over ja-detail-info-over__left"></div>
          <div className="ja-person-img">
            <img src={peopleInfo.picUrl || './logo192.png'}></img>
          </div>
          <div className="ja-person-info-detail">
            <p className="ja-person-name">{peopleInfo.name}</p>
            <ul className="ja-person-info-list">
              <li>
                <i className="ja-icon ja-idcard-icon"></i>{peopleInfo.certificateNumber}
              </li>
              <li>
                <i className="ja-icon ja-phone-icon"></i>{peopleInfo.name}
              </li>
              <li>
                <i className="ja-icon ja-circle-with-wave-icon"></i>自2019-09-02
                起连续<b>{peopleInfo.name}</b>天未出现
              </li>
              <li>
                <i className="ja-icon ja-home-icon"></i>
                {peopleInfo.name}
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
          <div className="ja-detail-info-over ja-detail-info-over__right"></div>
        </div>
        <div className="ja-detail-info-content">
          <Row>
            <Col span={16}>
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
                  <div className="ja-baseinfo-des">最后一次出现在该小区</div>
                  <div className="ja-slide-viewer">
                    <div className="ja-slide-viewer__main">
                      <img src="./logo192.png"></img>
                      <div className="ja-slide-viewer-zoom">
                        <i className="ja-icon ja-zoom-add-icon"></i>
                        <span>100%</span>
                        <i className="ja-icon ja-zoom-cut-icon"></i>
                      </div>
                    </div>
                    <div className="ja-slide-viewer__control">
                      <div className="ja-slide-btn ja-slide__prev_btn"></div>
                      <div className="ja-slide-viewer__clip">
                        <ul className="ja-slide-viewer-list">
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                          <li>
                            <img src="./logo192.png"></img>
                          </li>
                        </ul>
                      </div>
                      <div className="ja-slide-btn ja-slide__next_btn"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="ja-detail-item ja-detail-item_right">
                <div className="ja-detail-item_content_right">
                  <ul className="ja-detail-chart">
                    <li>
                      <div className="ja-detail-chart__main_title">
                        <i className="ja-icon four-side-start-icon"></i>
                        月内每周时间段活动规律
                      </div>
                      <div className="ja-detail-chart-content">
                        <Chart
                          height={400}
                          data={data}
                          scale={scale}
                          forceFit
                          theme="dark"
                        >
                          <Axis title name="month" />
                          <Axis title name="count" />
                          <Legend />
                          <Tooltip crosshairs={{ type: "rect" }} />
                          <Geom
                            type="line"
                            position="month*count"
                            color="month"
                          />
                        </Chart>
                      </div>
                    </li>
                    <li>
                      <div className="ja-detail-chart__main_title">
                        <i className="ja-icon four-side-start-icon"></i>
                        月出现次数统计
                      </div>
                      <div className="ja-detail-chart-content">
                        Chart content
                      </div>
                    </li>
                  </ul>
                </div>
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
}))(Form.create()(Detail));
