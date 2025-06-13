import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./News.css";
import { useNavigate } from "react-router-dom";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  category: string;
  publishDate: string;
  author: string;
}

const News: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<'ongoing' | 'finished'>('ongoing');

  // Sample news data - replace with your API data
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title:
        "Bạn Có Đang Lắng Nghe Tình Nguyện Viên? Chiến Lược Phản Hồi Giúp Giảm Sự Mất Kết Nối",
      excerpt:
        "Tìm hiểu những chiến lược hiệu quả để thu thập và sử dụng phản hồi từ tình nguyện viên, giúp tăng cường sự gắn kết và giảm thiểu tình trạng rời bỏ hoạt động tình nguyện.",
      readTime: "5 phút đọc",
      image: "/campaign1.jpg",
      category: "Quản lý tình nguyện viên",
      publishDate: "2024-03-15",
      author: "Nguyễn Minh Anh",
    },
    {
      id: 2,
      title: "Tạo Trải Nghiệm Tình Nguyện Mà Họ Yêu Thích",
      excerpt:
        "Khám phá cách thiết kế các chương trình tình nguyện hấp dẫn và có ý nghĩa, tạo ra những trải nghiệm đáng nhớ cho tình nguyện viên.",
      readTime: "7 phút đọc",
      image: "/campaign2.jpg",
      category: "Phát triển chương trình",
      publishDate: "2024-03-12",
      author: "Trần Văn Hùng",
    },
    {
      id: 3,
      title: "Theo Dõi Công Bằng Mồ Hôi với VolunteerHub",
      excerpt:
        "Cách các chương trình Habitat for Humanity có thể dễ dàng theo dõi và quản lý giờ làm việc của tình nguyện viên một cách hiệu quả.",
      readTime: "3 phút đọc",
      image: "/campaign3.jpg",
      category: "Công nghệ",
      publishDate: "2024-03-10",
      author: "Lê Thị Mai",
    },
    {
      id: 4,
      title: "So Sánh VolunteerHub và VOMO",
      excerpt:
        "Phân tích chi tiết về hai nền tảng quản lý tình nguyện viên hàng đầu để giúp bạn đưa ra lựa chọn phù hợp nhất.",
      readTime: "6 phút đọc",
      image: "/campaign4.jpg",
      category: "So sánh sản phẩm",
      publishDate: "2024-03-08",
      author: "Phạm Quốc Duy",
    },
    {
      id: 5,
      title: "Quản Lý Giờ Tình Nguyện Tương Đương 20 Nhân Viên Full-time",
      excerpt:
        "Partners for World Health chia sẻ kinh nghiệm quản lý một lượng lớn tình nguyện viên hiệu quả với VolunteerHub.",
      readTime: "4 phút đọc",
      image: "/campaign5.jpg",
      category: "Câu chuyện thành công",
      publishDate: "2024-03-05",
      author: "Hoàng Thị Lan",
    },
    {
      id: 6,
      title: "Chi Phí Ẩn Của Việc Quản Lý Sai Tình Nguyện Viên",
      excerpt:
        "Tìm hiểu những tổn thất không mong muốn từ việc quản lý tình nguyện viên không hiệu quả và cách khắc phục.",
      readTime: "6 phút đọc",
      image: "/campaign1.jpg",
      category: "Quản lý tình nguyện viên",
      publishDate: "2024-03-03",
      author: "Vũ Minh Tâm",
    },
  ];

  const categories = [
    "all",
    "Quản lý tình nguyện viên",
    "Phát triển chương trình",
    "Công nghệ",
    "So sánh sản phẩm",
    "Câu chuyện thành công",
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  const handleArticleClick = (articleId: number) => {
    navigate(`/news/${articleId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="newsPage">
      <div className="heroSection">
        <Header />
        <div className="heroContent">
          <h1 className="title">Cộng đồng</h1>
          <div className="breadcrumbs">
            <span>Trang chủ</span>
            <span className="breadcrumbDivider">/</span>
            <span className="current">Cộng đồng</span>
          </div>
        </div>
      </div>

      <div>
        <ul className="tab-list">
          <li
            className={activeTab === "ongoing" ? "active" : ""}
            onClick={() => setActiveTab("ongoing")}
          >
            Tin tức 
          </li>
          <li
            className={activeTab === "finished" ? "active" : ""}
            onClick={() => setActiveTab("finished")}
          >
            Diễn đàn 
          </li>
        </ul>
      </div>

      <div className="newsContent">
        <div className="container">
          <div className="contentWrapper">
            <div className="mainContent">
              <div className="categoryFilter">
                <h2>Khám phá bài viết</h2>
                <div className="filterButtons">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`filterButton ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === "all" ? "Tất cả" : category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="articlesGrid">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="articleCard"
                    onClick={() => handleArticleClick(article.id)}
                  >
                    <div className="articleImage">
                      <img src={article.image} alt={article.title} />
                      <div className="readTime">{article.readTime}</div>
                    </div>
                    <div className="articleContent">
                      <div className="articleMeta">
                        <span className="category">{article.category}</span>
                        <span className="date">
                          {formatDate(article.publishDate)}
                        </span>
                      </div>
                      <h3 className="articleTitle">{article.title}</h3>
                      <p className="articleExcerpt">{article.excerpt}</p>
                      <div className="articleFooter">
                        <span className="author">Bởi {article.author}</span>
                        <span className="readMore">Đọc thêm →</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="noArticles">
                  <h3>Không có bài viết nào</h3>
                  <p>Hiện tại chưa có bài viết nào trong danh mục này.</p>
                </div>
              )}
            </div>

            <div className="sidebar">
              <div className="sidebarWidget">
                <h3>Bài viết phổ biến</h3>
                <div className="popularArticles">
                  {newsArticles.slice(0, 3).map((article) => (
                    <div
                      key={article.id}
                      className="popularArticle"
                      onClick={() => handleArticleClick(article.id)}
                    >
                      <img src={article.image} alt={article.title} />
                      <div className="popularArticleContent">
                        <h4>{article.title}</h4>
                        <span className="popularReadTime">
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebarWidget">
                <h3>Danh mục</h3>
                <div className="categoryList">
                  {categories
                    .filter((cat) => cat !== "all")
                    .map((category) => (
                      <button
                        key={category}
                        className={`categoryItem ${
                          selectedCategory === category ? "active" : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                        <span className="articleCount">
                          (
                          {
                            newsArticles.filter(
                              (article) => article.category === category
                            ).length
                          }
                          )
                        </span>
                      </button>
                    ))}
                </div>
              </div>

              <div className="sidebarWidget">
                <h3>Theo dõi cập nhật</h3>
                <p>Đăng ký nhận thông báo về các bài viết mới nhất</p>
                <div className="subscribeForm">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="subscribeInput"
                  />
                  <button className="subscribeButton">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
