import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head.js';
import Link from 'next/link.js';
import ArticleLayout from '../../components/ArticleLayout';
import { getAllPostIds, getPostData, getPostContent, getSortedPostsData } from '../../utils/posts.js';
import styles from '../../styles/ProjectArticle.module.css'

export default function Project({ postData, postContent, allPostsData }) {
  //An array of each character in the content of the post file
  const fileBody = Object.values(postContent).map((item) => {
    return(
      <>{(item == '\n') ? <br/> : item}</>
    );
  });

  return (
    <ArticleLayout>
      <Navbar/>
      
      <Head>
        <title>{postData.title} | UBC Agroponics</title>
      </Head>
      
      <main className={styles.article}>                
        <div className={styles.articleHeader} style={{backgroundImage: `url(${`/projectIMGs/${postData.cover_image}`})`}}>
          <div/>
        </div>

        <div className={styles.articleBody}>
          <h1>{postData.header}</h1>
          <span>{postData.date}</span>
          <p>{fileBody}</p>

          <a href={postData.link} target='_blank'>View on Github</a>
        </div>
        <div className={styles.exampleIMG} style={{backgroundImage: `url(${`/projectIMGs/${postData.cover_image}`})`}}/>

        <div className={styles.otherArticles}> 
          <h2>Check out some other projects:</h2>
          <ul className={styles.moreArticles}>
            {allPostsData.map(({ id, cover_image, title }) => (
              (id != postData.id) ?
              <li className={styles.suggestedArticle} key={id}>
                <Link href={`/projects/${id}`}>
                  <img src={`/projectIMGs/${cover_image}`}/>
                  <br/>
                  {title}
                </Link>
              </li> : null
            ))}
          </ul>
        </div>
        <Footer/>
      </main>
    </ArticleLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  const postContent = getPostContent(params.id);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData, postContent, allPostsData,
    },
  };
}