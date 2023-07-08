import styles from "@/app/styles/home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div id={styles.box}>
      <div className={styles.right}>
        <Image
          src="/foodtruck-logo.png"
          width="107"
          height="83"
          alt="logo"
        ></Image>
        <h3 className={styles.heading}>
          Discover the <span style={{ color: "red" }}>Best</span> Food and
          Drinks
        </h3>
        <p>
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button>Explore Now!</button>

      </div>
      <div className={styles.left}>
        <Image
          src="/pizza-img.png"
          alt="Pizza-img"
          width="735"
          height="804"
          className={styles.Image}
        ></Image>
         <Image
          src="/red-img.png"
          alt="Pizza-img"
          width="839"
          height="752"
          className={styles.Image2}
        ></Image>

      </div>
    </div>
  );
};

export default Home;
