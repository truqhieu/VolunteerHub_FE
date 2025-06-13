import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./HomeDetail.css";

const images = [
    "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6646981/pexels-photo-6646981.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const HomeDetail: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollThumbnails = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = 100;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="home-detail-container">
            {/* Header */}
            <Header />

            {/* Banner */}
            <div className="banner">
                <div className="overlay"></div>
                <span className="banner-text">Dự án</span>
            </div>

            {/* Content Section */}
            <div className="content-wrapper">
                <div className="content-layout">
                    {/* Cột trái - Hình ảnh */}
                    <div className="left-column">
                        <img
                            src={selectedImage}
                            alt="Hình minh họa"
                            className="progress-image"
                        />
                        <div className="thumbnail-slider">
                            <button className="arrow-button" onClick={() => scrollThumbnails("left")}>
                                &#8592;
                            </button>
                            <div className="thumbnail-gallery-scroll" ref={scrollRef}>
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`thumbnail-${index}`}
                                        className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                            <button className="arrow-button" onClick={() => scrollThumbnails("right")}>
                                &#8594;
                            </button>
                        </div>
                    </div>

                    {/* Cột phải - Nội dung */}
                    <div className="right-column">
                        <div className="info-box">
                            <h2 className="project-title">
                                Xin giúp bé Cháng Thị Hà chữa bệnh hiểm nghèo
                            </h2>

                            <div className="project-meta">
                                <span className="organization">Quỹ Từ tâm Đắk Lắk</span>
                                <span>👤 278 lượt ủng hộ</span>
                            </div>

                            {/* Progress bar */}
                            <div className="progress-section">
                                <div className="progress-header">
                                    <span>Mục tiêu dự án</span>
                                    <span>30.000.000đ</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: "50%" }}></div>
                                </div>
                                <div className="raised-amount">15.022.084đ</div>
                            </div>

                            {/* Donation input */}
                            <div className="donation-section">
                                <div className="input-wrapper">
                                    <span className="currency">VNĐ</span>
                                    <input type="number" placeholder="Nhập số tiền" />
                                </div>
                                <button className="donate-btn">Ủng hộ ngay</button>
                                <button className="ambassador-btn">Trở thành sứ giả</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            {/* Project Content Section */}
            <div className="project-wrapper">
                <div className="project-content">
                    <div className="tab-buttons">
                        <button className="tab active">Nội dung</button>
                        <button className="tab disabled">Danh sách ủng hộ</button>
                    </div>

                    {/* Nội dung khi tab "Nội dung" được chọn */}
                    <div className="content-layout">
                        {/* Bên trái: nội dung chính */}
                        <div className="content-left">
                            <p className="details-paragraph">
                                Đây là nội dung chi tiết của dự án, nơi bạn có thể tìm hiểu thêm về
                                mục tiêu, lý do cũng như quá trình thực hiện của dự án. Thông qua nội
                                dung này, người ủng hộ có thể nắm rõ hơn về bối cảnh cũng như tiến độ của
                                dự án.
                            </p>
                            <p className="details-paragraph">
                                Bạn có thể bổ sung các thông tin về tình trạng hiện tại, các bước đã
                                thực hiện và kế hoạch trong tương lai, giúp tạo niềm tin và động lực
                                cho những người muốn ủng hộ.
                            </p>

                            <div className="note-box">
                                *Toàn bộ số tiền quyên góp từ cộng đồng sẽ tự động chuyển thẳng tới <strong>Quỹ Từ tâm Đắk Lắk</strong> (không qua GiveNow) để tiến hành hỗ trợ bé Y Sáng Buôn Dap. Thông tin cập nhật về chương trình sẽ được cập nhật tại mục <i>Báo cáo của dự án này</i>.
                            </div>

                            <div className="share-section">
                                <span>Chia sẻ dự án</span>
                                <button className="facebook-share">📘 Share</button>
                            </div>
                        </div>

                        {/* Bên phải: thông tin tổ chức gây quỹ */}
                        <div className="content-right">
                            <h4 className="info-title">Thông tin tổ chức gây quỹ</h4>
                            <div className="organization-info">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEXjAAv///8AAAD/7QDkAAvbAAvaAAv/7wD/9gD/8QD/8wD/8gD/9wDl5eX/6gC+vr7Gxsbs7OzxkQf29vbU1NSVlZXh0QBxcXGbm5s/Pz+oqKiysrLy8vL0pgbtAAtISEjX19ePj4+urq7zoAbqWQn4wQT+5QDv3gDXyACckQA2NjaFhYUQEBBiYmJaWlovLy/2tAXufwjlIgrtcgj5xgTAAAlXUQCvowD70gMdHR1sZABvb2/oRgnrZgnwiAf93wEREACCeQCQhgDMvgBLRgCglQDpTQnqWwn
                                    mMgr1rQWOAAc5NQAuKwDBtAAcGgBjXABkAAV7cgCvAAgrAAJ0AAYXAACaAAjKAApBAAOCAAY2AAMpJgA1MQAXFQBRSwBUAAQjAALJEkGHAAASRElEQVR4nO1cC1fbxhK2ZYKeGGPAEPMKD2MT87IhYJ4GOxAIISRp2t7eJG3//6+42pc08s6uNu295x6l+k5P0lij1Xw7szOzq9UWrB8dhf+3Av9z/DMYjj/7QVEY5wyfjf2oeBYxLPyYyBlmHznD7CNnmH3kDLOPnGH2kTPMPnKG2UfOMPvIGWYfOcPsI2eYfeQMs4+cYfaRM8w+cobZR84w+8gZZh85w+wjZ5h95Ayzj5xh9pEzzD5yhtlHzjD7yBlmH
                                    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
                                    InN4nzvuDB4f5XvUNHwhMynObtRBN8r+xXOgIHXhQF2kuFGwNW61a2QNHnIU90QPudieOvuIalEnjzTJVIr7F6WkOH9QyDOdRjl9SIzTuPnnBsxQAKdsePXyOuDCb0SQPW7NdgoSoG/RGAuKlnRgMcuOu05en9OYMC919T3Eknu06pftumhT13n7sQ7eH6gPzQu9tICm7uomcYShu8YOeAT/9F5bdaj/wko+gJ0G6jQO9VIm5Vvk+qfX5fQkhSY+LrCpO/rxouMgZk+SWzSVtBDVjSJSqNjbBuZuB3W9UbyWpu+phmZwaSH2PHfe3ickVCm+Wen4oCCS9/n5He7DpxXqPNM5a90XjhvTSGRJ0bw86lyE6BxsaVe4uLtfvGyH2l6pawcJtJxQ8DLF/v97BugFR4aKzvnS/v79/n9a4jB/3lF2BnGH2kTPMPnKG2UfOMPvIGWYfOcPsI2eYfeQMs4+cYfaRM8w+cobZR84w+8gZZh85w+wjZ5h95Ayzj5xh9pEzzD5yhtlHzjD7yBlmHznD7CNnmH3kDLOPnGH2kTPMPnKG2UfOMPvIGWYf/yiGPyoEw/Fn4z8mno1zhj82cobZx38AApHrzUJ02PkAAAAASUVORK5CYII="
                                    alt="Logo tổ chức"
                                    className="organization-logo"
                                />
                                <h5 className="organization-name">Quỹ Từ tâm Đắk Lắk</h5>
                                <p className="organization-description">
                                    “Quỹ Từ tâm Đắk Lắk hoạt động theo các quy định của Nghị định 93/2019/NĐ-CP, với mục đích hỗ trợ nạn nhân bị ảnh hưởng nghiêm trọng bởi thiên tai, hỏa hoạn, dịch bệnh...<br /><br />
                                    Quỹ tham gia các hoạt động vì mục tiêu phát triển bền vững, xây dựng xã hội văn minh, bảo vệ môi trường, trao học bổng, đào tạo kỹ năng sống... không vì mục tiêu lợi nhuận.”
                                </p>
                                <div className="organization-contact">
                                    <p>📍 19 Tân Dà, P.Tân Lợi, TP Buôn Ma Thuột, tỉnh Đắk Lắk</p>
                                    <p>📞 Hotline: <span className="highlight">0869654747</span></p>
                                    <p>✉️ Email: <a href="mailto:quytutam@quytutamdaklak.com">quytutam@quytutamdaklak.com</a></p>
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

export default HomeDetail;
