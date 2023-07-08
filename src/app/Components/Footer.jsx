import styles from "@/app/styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer_main_container}>
      <div className={styles.footer_div1}>
        <Image
          src="/foodtruck-img.png"
          width="107"
          height="83"
          alt="logo"
          className={styles.footer_img}
        ></Image>
      </div>
      <div className={styles.footer_div2}>
        <div className={styles.footer_flex1}>
        <h3 className={styles.footer_contact_us}>Contact Us</h3>
        <p className={styles.footer_para}>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className={`${styles.footer_para} ${styles.footer_email}`}>example2020@gmail.com</p>
        <p className={`${styles.footer_para} ${styles.footer_number}`}>(904) 443-0343</p>
        </div>
      </div >
      <div className={styles.footer_} >
        <h3 className={styles.footer_more}>More</h3>
        <p className={`${styles.footer_more_para} ${styles.footer_about}`}>About Us</p>
        <p className={`${styles.footer_more_para} ${styles.footer_product}`}>Products</p>
        <p className={`${styles.footer_more_para} ${styles.footer_carrer}`}>Career</p>
        <p className={`${styles.footer_more_para} ${styles.footer_contact}`}>Contact Us</p>
      </div>
      <div className={styles.footer_div4}>
        <h3 className={styles.footer_social}>Social Links</h3>
        <div className={styles.footer_flex2}>
        <Image
          src="/instagram-img.svg"
          width="107"
          height="83"
          alt="logo"
          className={styles.footer_img_insta}
        ></Image>
        <Image
          src="/twitter-img.svg"
          width="107"
          height="83"
          alt="logo"
          className={styles.footer_img_twit}
        ></Image>
        <Image
          src="/facebook-img.svg"
          width="107"
          height="83"
          alt="logo"
          className={styles.footer_img_fb}
        ></Image>
        </div>
        
        <p className={styles.footer_footer}>© 2022 Food Truck Example</p>
     
      </div>
    </div>
  );
};

export default Footer;
