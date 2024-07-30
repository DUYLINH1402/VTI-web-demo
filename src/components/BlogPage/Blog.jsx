import { CardBlog } from '../card/Card';
import { Footer } from '../Home/Footer';
import './blog.scss';
import { BlogContent } from './NewsData';

export const Blog = () => {
  return (
    <>
      <section>
        <div>
          <img
            id="blog-img"
            src="https://vtiacademy.edu.vn/upload/images/z4713784663138-19b4326dede563f15e1a1d30863432bf.jpg"
            alt="Blog image"
          />
          <h1 id="title-blog">Blog</h1>
          <h3 id="para-blog">Cập nhật các tin tức mới nhất về công nghệ</h3>
        </div>
        <div className="blog-content">
          {BlogContent.map((item, index) => (
            <CardBlog item={item} key={index}/>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
