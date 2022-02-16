import React, { Component } from 'react'
interface propsInterface {
  imgs: string[],
  children?: React.ReactNode,
  delay?: number,
  getCurrentIndex?: Function
}
interface StateType {
  offsetLong: number,
  imgs: string[],
  clearAnima: boolean,
  touchStartPosi: number,
  time: any
}
export default class RotationMap extends Component<propsInterface, StateType> {
  aniRef: React.RefObject<HTMLDivElement>;
  domWidth: number = document.body.clientWidth;
  constructor(props: propsInterface) {
    super(props)
    this.state = {
      offsetLong: -this.domWidth,
      imgs: [],
      time: null,
      clearAnima: false,//按压 清除动画
      touchStartPosi: 0,
    }
    this.aniRef = React.createRef()
  }

  runanima(): void {
    if (-this.state.offsetLong >= this.domWidth * (this.state.imgs.length - 2)) {
      let time = setTimeout(() => {
        if (this.aniRef.current) {
          this.aniRef.current.style.transition = "none";
        }
        this.setState({
          offsetLong: -this.domWidth,
        })
        clearTimeout(time)
      }, 200)

    }
    if (-this.state.offsetLong < this.domWidth) {
      let time = setTimeout(() => {
        if (this.aniRef.current) {
          this.aniRef.current.style.transition = "none";
        }
        this.setState({
          offsetLong: - this.domWidth * (this.state.imgs.length - 2),
        })
        clearTimeout(time)
      }, 200)
    }
    // let timer = setTimeout(() => {
    if (this.state.clearAnima) {//清除动画
      return
    }
    if (this.aniRef.current) {
      if (this.aniRef.current.style.transition == "none 0s ease 0s") {
        this.aniRef.current.style.transition = "all 0.2s ease 0s"
      }
    }
    let index = Math.floor(this.state.offsetLong / this.domWidth)
    this.props.getCurrentIndex && this.props.getCurrentIndex(-index);
    this.setState({
      offsetLong: (index - 1) * this.domWidth
    })

    // clearTimeout(timer)
    // }, this.props.delay || 3000)
  }
  componentDidMount() {
    let first = this.props.imgs[0]
    let endPic = this.props.imgs[this.props.imgs.length - 1]
    let newData = [endPic, ...this.props.imgs, first]
    this.setState({
      imgs: newData
    })
    console.log(newData);
    this.setState({
      time: setInterval(() => {
        this.runanima()
      }, this.props.delay || 3000)
    })
  }
  componentDidUpdate(props: any, state: any) {
  }

  onTouchStart(e: any) {

    e.nativeEvent.stopImmediatePropagation()
    e.nativeEvent.stopPropagation()
    // console.log(e.changedTouches[0].clientX);

    this.setState({
      clearAnima: true,
      touchStartPosi: -e.changedTouches[0].clientX + this.state.offsetLong
    })

  }
  onTouchEnd(e: any) {
    e.nativeEvent.stopImmediatePropagation()
    e.nativeEvent.stopPropagation()
    this.setState({
      clearAnima: false
    })
    if (this.aniRef.current) {
      if (this.aniRef.current.style.transition == "none 0s ease 0s") {
        this.aniRef.current.style.transition = "all 0.2s ease 0s"
      }
    }
    let index = Math.floor(this.state.offsetLong / this.domWidth)


    if (Math.abs(this.state.offsetLong - index * this.domWidth) > this.domWidth / 2) {//回位
      this.setState({
        offsetLong: (index + 1) * this.domWidth
      })
      this.props.getCurrentIndex && this.props.getCurrentIndex(-index + 2);
    } else {
      this.setState({
        offsetLong: (index) * this.domWidth
      })
      this.props.getCurrentIndex && this.props.getCurrentIndex(-index + 1);
    }
    clearInterval(this.state.time);
    this.runanima()
    this.setState({
      time: setInterval(() => {
        this.runanima()
      }, this.props.delay || 3000)
    })


  }
  onTouchMove(e: any) {
    e.nativeEvent.stopImmediatePropagation()
    e.nativeEvent.stopPropagation()
    this.aniRef.current && (this.aniRef.current.style.transition = "none 0s ease 0s");
    this.setState({
      offsetLong: e.changedTouches[0].clientX + this.state.touchStartPosi
    })
  }
  render() {
    return (

      <div>
        <ul style={{
          position: "relative",
          borderRadius: "10px",
          height: "38vw",

          overflow: "hidden",
        }}>
          <div
            ref={this.aniRef}
            onTouchStartCapture={this.onTouchStart.bind(this)}
            onTouchEndCapture={this.onTouchEnd.bind(this)}
            onTouchMoveCapture={this.onTouchMove.bind(this)}
            style={{
              display: "flex",
              position: "absolute",
              left: this.state.offsetLong,
              transition: "all .2s",
              width: this.domWidth + "px",
            }}>
            {
              this.state.imgs.map((e, i) => {
                return (
                  <img style={{
                    width: "100%",
                    objectFit: "cover",
                    padding: "10px",
                    boxSizing: "border-box",
                    borderRadius: '20px'
                  }} src={e} key={'img' + i} />
                )
              })
            }
          </div>

        </ul>
      </div>
    )
  }
}
