"use client"

import type { IArticle } from "@/types/interfaces";

import articlesData from "@/data/articles";
import { useEffect, useState } from "react";

import Article from "@/components/blog/article/article";
import Typography from "@/components/ui/typography/typography";

import styles from "./page.module.css";


// **** Component **** //

const TheFutureOfAi = () => {
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    setArticle(articlesData.find((article) => window.location.pathname === article.url))
  }, [article]);

  return (
    article
      ? (
        <Article article={article}>
          <Typography className={styles.paragraph} variant="body-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit.Vivamus vel velit eget quam bibendum tincidunt.Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi.Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit.In hac habitasse platea dictumst.Vivamus vel velit eget quam bibendum tincidunt.Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit.Vivamus vel velit eget quam bibendum tincidunt.</Typography >
          <Typography className={styles.paragraph} variant="body-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Vivamus vel velit eget quam bibendum tincidunt. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. In hac habitasse platea dictumst. Vivamus vel velit eget quam bibendum tincidunt. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Vivamus vel velit eget quam bibendum tincidunt.</Typography>
          <Typography className={styles.paragraph} variant="body-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Vivamus vel velit eget quam bibendum tincidunt. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. In hac habitasse platea dictumst. Vivamus vel velit eget quam bibendum tincidunt. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Vivamus vel velit eget quam bibendum tincidunt.</Typography>
          <Typography className={styles.paragraph} variant="body-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Vivamus vel velit eget quam bibendum tincidunt. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. In hac habitasse platea dictumst. Vivamus vel velit eget quam bibendum tincidunt. Sed euismod, nulla a fringilla ultricies, sapien justo luctus est, non tincidunt nisl diam a velit. Vivamus vel velit eget quam bibendum tincidunt.</Typography>
        </Article >
      )
      : (<></>)
  )
};


// **** Default export **** //

export default TheFutureOfAi;
