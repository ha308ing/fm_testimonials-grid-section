import { FC } from "react";
import { TTestimonial } from "../testimonials/data";
import styles from "./testimonial.module.css";

export const Testimonial: FC<{ testimonial: TTestimonial }> = ({
  testimonial,
}) => {
  const { name, status, preview, quote, avatar } = testimonial;

  return (
    <article className={styles.testimonial}>
      <header className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
        <div>{name}</div>
        <div className={styles.status}>{status}</div>
      </header>
      <div className={styles.preview}>{preview}</div>
      <div className={styles.quote}>{quote}</div>
    </article>
  );
};
