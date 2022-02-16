import React, { createRef } from 'react';
import { useEffect, useState } from "react"
import styles from "./main.module.css"
import BookLink from "../../../compontent/BookLink"
function Main() {
  let searchHot = ["雪中", "超神学院", "末世", "红楼", "雪中悍刀行", "雪中"]
  const animaRef: React.RefObject<HTMLDivElement> = React.createRef();
  const [animalRun, setanimalRun] = useState(0)
  const [scrollLong, setscrollLong] = useState(0)
  const [isLoading, setisLoading] = useState(false)
  const scrollRef: React.RefObject<HTMLDivElement> = createRef();
  const [bookShelfList, setbookShelfList] = useState([{}])
  let len = -(searchHot.length - 1) * 30
  const data = [
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      img2: "https://bookcover.yuewen.com/qdbimg/349573/1026934532/90",
      bookName: "我将埋葬众神",
      type: "day_lead_read",

      status: "暴雨之夜，道门少女追杀而来.",
      tipNo: 85,
      bookCheck: "仙侠,神话修仙",
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "我的治愈游戏",
      status: "我会修空调 · 593章未读",
      newword: "第581章 谁躲在他床下"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026937532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026934532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907232/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1012407532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
  ];

  useEffect(() => {
    setbookShelfList(data);
    let time =
      requestAnimationFrame(() => {
        animaRef.current && (animaRef.current.style.top = animalRun + "px");
        if (animalRun === -30 || animalRun === -60 || animalRun === -90 || animalRun === -120 || animalRun === -150) {
          let time = setTimeout(() => {
            setanimalRun(animalRun - 1)
            clearTimeout(time)
          }, 1000)
          return
        }
        if (animalRun > len) {
          setanimalRun(animalRun - 1)
        } else {
          setanimalRun(0)
        }
        cancelAnimationFrame(time)

      })
    return () => {

    }
  }, [animalRun]);
  const [start, setstart] = useState(0);
  const [downLong, setdownLong] = useState(0);
  const [background, setbackground] = useState(false);//true就改成白色
  const handlerTouchStart = (e: any) => {
    setdownLong(scrollRef.current?.scrollTop || 0);
    setstart(e.targetTouches[0].clientY);
  }
  const handlerTouchMove = (e: any) => {
    // console.log(e.changedTouches[0].clientY - start);
    // if(scrollLong + e.changedTouches[0].clientY - start )
    // if( e.changedTouches[0].clientY - start <0){ 

    // }
    console.log(scrollRef.current?.scrollTop);

    if ((scrollRef.current?.scrollTop || 0) > 80) {
      setbackground(true)
    } else {
      setbackground(false)
    }
    let down = -downLong + e.changedTouches[0].clientY - start;
    let powDown = Math.pow(down, .8)
    if (0 < powDown && powDown < 145) {
      // console.log(-downLong + e.changedTouches[0].clientY - start);
      setscrollLong(powDown)
    }

  }
  const handlerTouchEnd = (e: any) => {
    if (scrollLong > 100) {
      setisLoading(true)
      setscrollLong(100)
      let time = setTimeout(() => {
        setscrollLong(0)
        setisLoading(false)
        setdownLong(0)
        clearTimeout(time)
      }, 3000 * (Number(Math.random().toFixed(2))));
    } else if (scrollLong > 0) {
      setscrollLong(0)
      setdownLong(0)
    }
  }
  return (
    <div className={styles.all} style={{
      height: "100vh",
      overflow: "hidden",

    }}>
      <header>
        <div className={styles.hidden}>
          <div className={styles.background} style={{
            'transform': 'translateZ(' + scrollLong / 2 + 'px' + ')',
            'height': 150 + scrollLong + 'px',
            background: !background ? `url(${require('../../../static/image/IMG_20220201_154900.jpg')})` : "#fff"
          }}>
          </div>
          <div className={styles.loading_anima} style={{
            display: scrollLong > 10 ? "flex" : "none"
          }}>
            <svg width="30" height="30" fill="green">
              <circle cx="15" cy="15" stroke-width="6.1" stroke="rgb(255, 170, 170)"
                r={scrollLong * 7.5 / 100 < 7.5 ? scrollLong * 7.5 / 100 : 7.4}></circle>

              <circle cx="15" cy="15"
                style={{
                  display: isLoading ? 'none' : 'inherit'
                }}
                stroke-dasharray={scrollLong > 100 ? 46 - (scrollLong - 100) * 47 / 50 + ' ' + (scrollLong - 100) * 47 / 50 : ''}
                stroke-dashoffset={scrollLong > 100 ? 10.5 + (46 - (scrollLong - 100) * 47 / 50) / 2 : ''} stroke-width="6"
                stroke="red" r={scrollLong * 7.5 / 100 < 7.5 ? scrollLong * 7.5 / 100 : 7.5} fill="red"></circle>
              {/* <circle
                style={{
                  display: isLoading ? 'inherit' : 'none',
                }}
                stroke-dasharray="10 40"
                strokeWidth="6.5"
                stroke="red"
                cx="15" cy="15" r="7" fill="transparent" >
              </circle>
               */}
              <circle cx="15" cy="15" r={scrollLong < 90 ? scrollLong * 10 / 110 - 2 : 7} fill="rgb(253, 201, 201)">
              </circle>

            </svg>
            <p>{isLoading ? "正在加载中..." : scrollLong < 100 ? '下拉刷新' : '松手刷新'}</p>
          </div>


        </div>
        <div className={styles.book_l} >
          <span style={{
            color:!background?"#fff":"#000"
          }}>书架</span>
          <img src="http://1.116.252.29/arrow.png" alt="" />
          <div className={styles.search}>
            <div className={styles.anima} ref={animaRef}>
              {searchHot.map((ele, i) => {
                return (
                  <li style={{
                    lineHeight: "30px"
                  }} key={i}>
                    <img src="http://1.116.252.29/search.png" alt="" />
                    <span style={{
                      fontSize: "14px",
                      fontWeight: 300
                    }}>{ele}</span>
                  </li>
                )
              })}
            </div>
          </div>
          <img className={styles.history} src="http://1.116.252.29/longtime.png" alt="" />
          <img className={styles.manage} src="http://1.116.252.29/more.png" alt="" />
        </div>
      </header>

      <div
        onTouchStart={handlerTouchStart}
        onTouchMove={handlerTouchMove}
        onTouchEnd={handlerTouchEnd}
        style={{
          transform: 'translateY(' + scrollLong + 'px)'
        }}
        ref={scrollRef}
        className={styles.scroll_book}>
        <div className={styles.tip}>
          <div className={styles.canlender}>
            <img src="http://1.116.252.29/canlender.png" />
            <span>
              {new Date().getDate()}
            </span>
          </div>
          <p >Hi，等你好久了，欢迎来到起点读书</p>


        </div>
        <BookLink bookLinkList={bookShelfList}>
          <div className={styles.find_more}>
            查找更多精彩作品
           </div>

        </BookLink></div>
    </div>
  );
}

export default Main;
