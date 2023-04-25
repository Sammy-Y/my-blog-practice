import React from "react";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <h1>Hello, I'm Sammy</h1>
      <p>
        Hello,
        我是Sammy，目前就讀勤益科技大學三年級。個性學習積極、善於溝通，喜歡與人打交代，我覺得做事情一定要腳踏實地，將每件事情做好，大學期間有拿過書卷獎及修習微積分表現優異的獎項。
      </p>
    </section>
  );
};

export default Home;
