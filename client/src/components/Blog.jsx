import styles from './component.module.css';

const Blog = () => {
  return (
    <div className={styles.Blogs}>
      <div className={styles.container}>
        <div className={styles.wrapBlog}>
        <div className={styles.Overflow_blog}>
          <h2 className={styles.heading}>
            The Overflow Blog
          </h2>
          <ul className={styles.Blog_List}>
            <li>
              <i className="fa-solid fa-pen"></i>
              <span className={styles.description}>The unexpected benefits of mentoring others</span>
            </li>
            <li>
              <i className="fa-solid fa-pen"></i>
              <span className={styles.description}>Podcast 354: Building for AR with Niantic Labs augmented reality SDK</span>
            </li>
          </ul>
        </div>

        <div className={styles.Features_meta}>
          <h2 className={styles.heading}>Featured & meta</h2>
          <ul className={styles.metaList}>
            <li>
              <i className="fa-brands fa-stack-overflow"></i>
              <span className={styles.description}>Beta release of Collection™ on Stack Overflow</span>
            </li>
          </ul>
        </div>
        </div>

        <div className={styles.HotMetaPost}>
          <h2 className={styles.heading}>Hot meta post</h2>
          <ul className={styles.HotMetaPostList}>
            <li>
            <span className={styles.count}>8</span>
              <p className={styles.description}> Tags [driver] and [device-driver] appear to be redundant</p>
            </li>
            <li>
            <span className={styles.count}>27</span>
            <p className={styles.description}> How to handle duplicates where A is closed as dup of B but I have an answer that...</p>
            </li>
            <li>
            <span className={styles.count}>27</span>
            <p className={styles.description}> Ambiguous tag [container]</p>
            </li>
          </ul>
        </div>

        <div className={styles.customeFilter}>
          <h2 className={styles.heading}> Custom filter</h2>
          <input className={styles.filter} type="text" name="" id="" placeholder="add custom filter" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
