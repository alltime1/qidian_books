import React from 'react';
import styles from "./HotCakes.module.css"

import { useState } from 'react';
interface propsInterface {
  bookList?: Array<{
    icon:string,
    name:string ,
    instroduce:string ,
    classify: string,
    word:string ,
    classify2: string
  }>
}
function HotCakes(props: propsInterface) {
  const [initProps, setinitProps] = useState(props.bookList)
  if(!initProps){
    setinitProps([{
      icon: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      name: 'NBA之最强3D开局',
      instroduce: "临危受命，火爆三分，扭转火箭必输之局",
      classify: "篮球运动",
      word: "40万",
      classify2: "NBA,篮球,NBA"
    },{
      icon: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      name: 'NBA之最强3D开局',
      instroduce: "临危受命，火爆三分，扭转火箭必输之局",
      classify: "篮球运动",
      word: "40万",
      classify2: "NBA,篮球,NBA"
    },{
      icon: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      name: 'NBA之最强3D开局',
      instroduce: "临危受命，火爆三分，扭转火箭必输之局",
      classify: "篮球运动",
      word: "40万",
      classify2: "NBA,篮球,NBA"
    }])
  }
  return (
    <div className={styles.all}>
      <header className={styles.header}>
        <p>畅销精<span>选</span> </p>
        <div className={styles.more}>
          更多
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2035" width="200" height="200"><path d="M329.525 191.547l56.285-58.26 393.996 392.021L385.81 917.329l-56.285-58.26 331.786-333.761z" p-id="2036"></path></svg>
        </div>
      </header>
      {
        initProps?.map(e => {
          return <div className={styles.content}>
            <img src={e.icon} alt="" />
            <div className={styles.detail}>
              <div>
                 <p>{e.name}</p>
              <span>{e.instroduce}</span>
              </div>
             
              <div className={styles.classify}>
                <p>{e.classify}·{e.word}字</p>
                <div className={styles.classify2}>
                  <div className={styles.classify2_first}>
                    <div className={styles.qi}>
                      起
                      </div>
                    <p>{e.classify2.split(",")[0]}
                    </p>
                  </div>
                  <div className={styles.classify2_o}>
                    {e.classify2.split(",")[1]}
                  </div>
                  <div className={styles.classify2_o}>
                    {e.classify2.split(",")[2]}
                  </div>
                </div>
              </div>
            </div>
          </div>

        })
      }
    </div>
  )
}

export default HotCakes;
