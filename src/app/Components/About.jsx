import styles from "@/app/styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div>
        <Image
          src="/about-img.png"
          width="107"
          height="83"
          alt="logo"
          className={styles.about_img}
        ></Image>
      </div>
      <div className={styles.about_left}>
        <div className={styles.about_middle_div}>
          <h3 className={styles.about_heading}>About Us</h3>
          <p className={styles.about_para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
        </div>
        <button className={styles.about_btn}>Read More</button>
      </div>
    </div>
  );
};

export default About;
