import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/marcus.png"
          alt="An image showing Marcus"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Marcus</h1>
      <p>This is a blog from the NextJS Course by Maximilian Schwarzmüller.</p>
    </section>
  );
}

export default Hero;
