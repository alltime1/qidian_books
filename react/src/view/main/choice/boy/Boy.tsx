import React, { Component } from 'react'
import RotationMap from './../../../../compontent/rotationMpa/RotationMap';
import styles from "./Boy.module.css"
import HotCakes  from "../../../../compontent/hotCakes/HotCakes"
interface classifyInterface {
  icon: string,
  name: string,
}
export default class Boy extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      classify: [
        {
          icon: "",
          name: "分类"
        },
        {
          icon: "",
          name: "排行"
        },
        {
          icon: "",
          name: "三江"
        },
        {
          icon: "",
          name: "剧场"
        },
        {
          icon: "",
          name: "免费"
        }, {
          icon: "",
          name: "完本"
        }
      ],
      imgs: [
        require("./IMG_20220126_113908.jpg"),
        require("./IMG_20220126_114702.jpg"),
        require("./IMG_20220126_114720.jpg"),
        require("./IMG_20220126_114736.jpg")
      ],
      background: [
        'rgb(155, 66, 66)',
        "rgb(255, 216, 131)",
        'rgb(155, 66, 66)',
        'rgb(255, 247, 129)',

        'rgb(112, 145, 255)',
        "rgb(255, 216, 131)"
      ],
      index: 1
    }
  }
  getCurrentIndex = (i: number) => {
    console.log(i);

    this.setState({
      index: i + 1
    })
  }
  render() {
    return (
      <div
        style={{
          paddingTop: "80px",
          height:"100vh",
          paddingBottom:"50px",
          boxSizing:"border-box",
          background: this.state.background[this.state.index]
        }}
      >
        <RotationMap imgs={this.state.imgs} getCurrentIndex={this.getCurrentIndex}>
        </RotationMap>
        <ul className={styles.classify}>
          {
            this.state.classify.map((e: classifyInterface) => {
              return (
                <div>
                  <img style={{
                    width: '20px',
                    height: '20px'
                  }} src={e.icon} alt="" />
                  <p>{e.name}</p>
                </div>
              )
            })
          }
        </ul>

        <HotCakes ></HotCakes>
      </div>
    )
  }
}
