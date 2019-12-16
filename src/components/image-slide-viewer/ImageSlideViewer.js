import React, { Component } from "react";

class ImageSlideViewer extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      imageList: [
        {
          thumbUrl: "./logo192.png",
          url: ""
        },
        {
          thumbUrl: "./logo192.png",
          url: ""
        }
      ]
    };
  }
  handleGoPrevPage() {
    console.log("goPrevPage");
  }

  handleGoNextPage() {
    console.log("goNextPage");
  }

  handleZoomAddBtn() {}

  handleZoomCutBtn() {}
  handleViewerItem(item, i) {
      this.setState({
        selectedIndex: i
      });
      console.log(item, i)
  }
  render() {
    return (
      <div className="ja-slide-viewer">
        <div className="ja-slide-viewer__main">
          <img src="./logo192.png"></img>
          <div className="ja-slide-viewer-zoom">
            <i
              className="ja-icon ja-zoom-add-icon"
              onClick={this.handleZoomAddBtn}
            ></i>
            <span>100%</span>
            <i
              className="ja-icon ja-zoom-cut-icon"
              onClick={this.handleZoomCutBtn}
            ></i>
          </div>
        </div>
        <div className="ja-slide-viewer__control">
          <div
            className="ja-slide-btn ja-slide__prev_btn"
            onClick={this.handleGoPrevPage}
          ></div>
          <div className="ja-slide-viewer__clip">
            <ul className="ja-slide-viewer-list" style={{ marginLeft: 0 }}>
              {this.state.imageList.map((item, i) => {
                return (
                  <li
                    onClick={this.handleViewerItem.bind(this, item, i)}
                    className={i === this.state.selectedIndex ? "selected" : ""}
                  >
                    <img src={item.thumbUrl}></img>
                  </li>
                );
              })}

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
          <div
            className="ja-slide-btn ja-slide__next_btn"
            onClick={this.handleGoNextPage}
          ></div>
        </div>
      </div>
    );
  }
}

export default ImageSlideViewer;
