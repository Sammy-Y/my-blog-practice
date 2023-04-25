import React from "react";

import classes from "./About.module.css";
import myPic from "./pic/小琉球.jpg";

const About = () => {
  return (
    <section id={classes.about}>
      <h1>About</h1>
      <picture>
        <img src={myPic} alt="myPic" width="100%" className={classes.pic} />
      </picture>
      <section>
        <h2>About me</h2>
        <p>
          Hello,
          我是Sammy，目前就讀勤益科技大學三年級。個性學習積極、善於溝通，喜歡與人打交代，我覺得做事情一定要腳
          踏實地，將每件事情做好
          ，大學期間有拿過書卷獎及修習微積分表現優異的獎項 。
        </p>
        <p style={{ marginBottom: "6rem" }}>
          大學就讀資訊工程學系，大一與大二的實作課程後才了解，原來高中學的程式設計是非常基本的，在學期間修習很多資訊工程相關的專業科目，如：資料結構、離散數學、演算法、作業系統以及計算機組織與結構，且老師上課教的內容有限，在課餘時間還是要不斷精進自己程式語言的能力並應用上課所學，俗話說：『萬丈高樓平地起』，當基本功打好了，再來增進練習較困難的題目，過程雖然辛苦但這是我的興趣，所以過程中非常開心。
        </p>
      </section>
    </section>
  );
};

export default About;
