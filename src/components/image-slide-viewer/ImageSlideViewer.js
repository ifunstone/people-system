import React, { Component } from "react";

class ImageSlideViewer extends Component {
  constructor() {
    super();
    let imageList = [];
    for (let i = 0; i < 20; i++) {
      imageList.push({
        thumbUrl: "./logo192.png",
        url: "./logo192.png"
      });
    }
    this.state = {
      selectedIndex: 0,
      backgroundSizePercent: 100,
      backgroundImageUrl: "./logo192.png",
      imageList: imageList,
      marginLeft: 0
    };
  }
  handleGoPrevPage() {
    console.log("goPrevPage");
    this.setState({
        marginLeft: this.state.marginLeft - 100
    });
  }

  handleGoNextPage() {
    console.log("goNextPage");
    this.setState({
        marginLeft: this.state.marginLeft + 100
    });
  }

  handleZoomAddBtn() {
    this.setState({
      backgroundSizePercent: this.state.backgroundSizePercent + 10
    });
  }

  handleZoomCutBtn() {
    this.setState({
      backgroundSizePercent: this.state.backgroundSizePercent - 10
    });
  }
  handleViewerItem(item, i) {
    this.setState({
      backgroundSizePercent: 100,
      backgroundImageUrl: item.url,
      selectedIndex: i
    });
  }
  render() {
    const { backgroundSizePercent, backgroundImageUrl, marginLeft } = this.state;
    return (
      <div className="ja-slide-viewer">
        <div
          className="ja-slide-viewer__main"
          style={{
            backgroundSize: backgroundSizePercent + "%",
            height: "400px",
            backgroundImage: "url(" + backgroundImageUrl + ")"
          }}
        >
          {/* <img src="./logo192.png"></img> */}
          <div className="ja-slide-viewer-zoom">
            <i
              className="ja-icon ja-zoom-add-icon"
              onClick={this.handleZoomAddBtn.bind(this)}
            ></i>
            <span>{backgroundSizePercent}%</span>
            <i
              className="ja-icon ja-zoom-cut-icon"
              onClick={this.handleZoomCutBtn.bind(this)}
            ></i>
          </div>
        </div>
        <div className="ja-slide-viewer__control">
          <div
            className="ja-slide-btn ja-slide__prev_btn"
            onClick={this.handleGoPrevPage.bind(this)}
          ></div>
          <div className="ja-slide-viewer__clip">
            <ul className="ja-slide-viewer-list" style={{ marginLeft: marginLeft + 'px' }}>
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
            </ul>
          </div>
          <div
            className="ja-slide-btn ja-slide__next_btn"
            onClick={this.handleGoNextPage.bind(this)}
          ></div>
        </div>
      </div>
    );
  }
}

export default ImageSlideViewer;
