import ArticlePage from '@/modules/ArticlePage'
import React from 'react'

const page = () => {
  const data = {
    hero: {
      created_title: "Posted",
      created_date: "December 28, 2024",
      author_title: "Author",
      author_name: "Vugar Mehdiyev",
      reading_title: "Reading Time",
      reading_time: "About 5 min read",
      word_title: "Word",
      word_count: "1000 words",
      banner: "/images/article-hero.png",
    },
    description: {
      title: "Ali Huseynov, a leading authority on marketing and brand<p>&nbsp;</p><p>&nbsp;</p>",
      rich_text: "<p>Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a PhD in Marketing from Lancaster University and has been a marketing professor at London Business School, MIT Sloan (visiting), and the University of Minnesota. He has been the recipient of MBA teaching awards at LBS, MIT, Singapore Management University and MBS.</p><p>&nbsp;</p><p>Mark has been teaching brand management to MBA students at elite business schools and a consulting career working on some of the most successful brands on the planet such as Subaru, De Beers, Ericsson, Sephora, News Corp, Hennessy and Baxter.</p><p>&nbsp;</p><p>&nbsp;</p><img src='/images/article-image-1.png' alt='article-image' /><p>&nbsp;</p><p>&nbsp;</p><img src='/images/article-image-2.png' alt='article-image' />",
    }
  }
  return (
    <>
      <ArticlePage data={data} />
    </>
  )
}

export default page
