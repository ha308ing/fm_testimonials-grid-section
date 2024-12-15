import { Testimonial } from "../testimonial/testimonial";
import { data } from "./data";
import styles from "./testimonials.module.css";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      {data.map((dataEntry, index) => (
        <Testimonial testimonial={dataEntry} key={index} />
      ))}
    </section>
  );
};
