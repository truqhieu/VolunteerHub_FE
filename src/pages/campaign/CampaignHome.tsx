import React from "react";
import "./CampaignHome.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface Campaign {
    id: number;
    image: string;
    organization: string;
    title: string;
    raised: number;
    target: number;
    category: string;
}

const campaigns: Campaign[] = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg?auto=compress&cs=tinysrgb&w=600", // Thay bằng link ảnh thật
        organization: "Quỹ Từ tâm Đắk Lắk",
        title: "Giúp bố mẹ nghèo có thêm hy vọng cứu con",
        raised: 5382920,
        target: 20000000,
        category: "Trẻ em"
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/6129689/pexels-photo-6129689.jpeg?auto=compress&cs=tinysrgb&w=600",
        organization: "Quỹ Từ thiện Nâng bước tuổi thơ",
        title: "Xin chung tay giúp bé Di Nhiên giữ lại nguồn sáng quý giá",
        raised: 8373800,
        target: 30000000,
        category: "Trẻ em"
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/6129688/pexels-photo-6129688.jpeg?auto=compress&cs=tinysrgb&w=600",
        organization: "Quỹ Vì trẻ em khuyết tật Việt Nam",
        title: "Tiếp sức đến trường 2025, nơi những trẻ em nghèo mắc bệnh",
        raised: 8813000,
        target: 200000000,
        category: "Trẻ em"
    }
];

const CampaignList: React.FC = () => {
    return (
        <div className="campaign-list-container">
            <Header />

            <div className="banner">
                <div className="overlay"></div>
                <span className="banner-text">Dự án</span>
            </div>

            <h2 className="section-title">Các dự án đang gây quỹ</h2>
            <p className="section-description">
                Hãy lựa chọn dự án trong lĩnh vực mà bạn quan tâm nhất
            </p>

            <div className="campaign-grid">
                {campaigns.map((campaign) => {
                    const progress = (campaign.raised / campaign.target) * 100;

                    return (
                        <div className="campaign-card" key={campaign.id}>
                            <div className="image-wrapper">
                                <img src={campaign.image} alt={campaign.title} />
                                <span className="tag">{campaign.category}</span>
                            </div>
                            <div className="campaign-info">
                                <p className="organization">{campaign.organization}</p>
                                <h3 className="title">{campaign.title}</h3>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                                <p className="raised">
                                    {campaign.raised.toLocaleString()}đ
                                </p>
                                <p className="target">với mục tiêu {campaign.target.toLocaleString()}đ</p>
                                <p className="percentage">{progress.toFixed(1)}%</p>
                            </div>
                        </div>
                    );
                })}
            </div>
             <Footer />
        </div>
    );
};

export default CampaignList;
