import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import styles from "./styles.module.scss";

export default function ArticleCard(props) {
  const { title, description, topic, date, slug, readTime, last } = props;
  return (
    <Link href={slug}>
      <div
        className={styles.card}
        style={{
          borderBottom: last ? "none" : "auto",
          paddingBottom: last ? "0" : "auto",
        }}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.extra}>
          <div className={styles.date}>
            <span> {format(parseISO(date), "MMM d, uuu")}</span>
            <span className={styles.divider}></span>
            <span>{topic}</span>
          </div>

          <div className={styles.readtime}>
            <Image src="/assets/icons/book.svg" height={18} width={18} />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
