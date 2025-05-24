import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatIcon from "@mui/icons-material/Chat";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InsertChartIcon from "@mui/icons-material/InsertChart";

import "./Home.css";

const brandImages = [
  "brand1.png",
  "brand2.png",
  "brand3.png",
  "brand4.png",
  "brand5.png",
];

const Home: React.FC = () => {
  const handleNavClick = (section: string): void => {
    console.log(`Navigating to ${section}`);
    // Add your navigation logic here
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // px per frame
    const interval = setInterval(() => {
      scrollAmount += speed;
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, 20); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main className="home-content">
        <div className="hero-otr flex">
          <div className="hero-left">
            <h1>Powerful Volunteer Management, Made Simple</h1>
            <p>
              Better Impact helps organizations save time, reduce admin work,
              and boost volunteer engagement—at every stage, from onboarding to
              recognition.
            </p>
            <button
              className="contact-btn"
              onClick={() => handleNavClick("contact")}
              type="button"
            >
              Contact Us
            </button>
            <div className="org-info">
              <h2>Join over 100+ organizations</h2>
              <p>leading the way in making a difference</p>
              <div className="org-images">
                <img src="user1.png" alt="user1" />
                <img src="user2.png" alt="user2" />
                <img src="user3.png" alt="user3" />
                <img src="user4.png" alt="user4" />
                <img src="user5.png" alt="user5" />
              </div>
            </div>
          </div>
          <div className="hero-rgt">
            <img src="/org.png" alt="Org" className="mock-image" />
          </div>
        </div>

        <Box className="mui-brand-slider" ref={scrollRef}>
          <Box className="mui-brand-track">
            {brandImages.map((src, index) => (
              <Box className="mui-brand-item" key={index}>
                <img src={src} alt={`Brand ${index + 1}`} />
              </Box>
            ))}
            {/* Duplicate to make seamless scroll */}
            {brandImages.map((src, index) => (
              <Box className="mui-brand-item" key={`dup-${index}`}>
                <img src={src} alt={`Brand ${index + 1}`} />
              </Box>
            ))}
          </Box>
        </Box>

        <div className="hero-otr2 flex">
          <div className="hero-left">
            <h2>Explore All of Our Solutions</h2>
            <p>
              Expand your organization's volunteer management capabilities with
              additional tools by Better Impact
            </p>
            <button
              className="start-btn"
              onClick={() => handleNavClick("start")}
              type="button"
            >
              Get Started
            </button>
          </div>
          <div className="hero-rgt">
            <img src="/org2.png" alt="Org" className="mock-image" />
          </div>
        </div>

        <div className="volunteer-section">
          <h2>Everything You Need to Empower Volunteers</h2>
          <p>
            From scheduling and communication to reporting and
            recognition—Better Impact Volunteer Management Software gives you
            the tools to manage, support, and grow your volunteer program with
            confidence.
          </p>
        </div>

        <Box className="features-grid" sx={{ mt: 6, px: 2 }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            }}
            gap={4}
          >
            {[
              {
                title: "Engagement",
                desc: "Reduce admin workload and increase volunteer engagement.",
                icon: <GroupsIcon />,
              },
              {
                title: "Volunteer Retention",
                desc: "Celebrate volunteer efforts to improve morale and satisfaction.",
                icon: <FavoriteIcon />,
              },
              {
                title: "Scheduling",
                desc: "Manage onboarding, availability, and shifts easily.",
                icon: <CalendarTodayIcon />,
              },
              {
                title: "Communication",
                desc: "Send updates and reminders via email and SMS.",
                icon: <ChatIcon />,
              },
              {
                title: "Management",
                desc: "Track hours, tasks, and profiles with simple tools.",
                icon: <AccountTreeIcon />,
              },
              {
                title: "Reporting",
                desc: "Analyze data, generate reports, and share insights.",
                icon: <InsertChartIcon />,
              },
            ].map((item, index) => (
              <Box key={index} display="flex" flexDirection="column" gap={1}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: "#0f292f",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <div className="volunteer-section">
          <h2>Insights for Volunteer Leaders</h2>
          <p>
            Stay updated with trends, tools, and real stories shaping the future
            of volunteer management. Explore expert advice, platform updates,
            and inspiration from real-world impact.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
