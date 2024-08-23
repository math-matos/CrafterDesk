import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import logo from "./assets/logo2.png";

import "./css/HomePage.css";
import { Avatar, Box, Button, Chip, Grid, Typography } from "@mui/material";

function App() {
  const videoURL =
    "https://drive.google.com/uc?export=download&id=11HQpdzJT0jMauWRDCpWDv-OVmJjdWWYx";

  return (
    <>
      <div className="container">
        {/* Navbar */}
        <Header />

        {/* Hero Section */}
        <section className="hero">
          <Grid container xs={12}>
            <Grid item xs={12}>
              {/* <Box display="flex" alignItems={"center"} justifyContent={"center"} border={"1px solid grey"} borderRadius={10} >
                <Avatar
                  alt="Gojo Satouro"
                  src="https://dimensaosete.com.br/static/7fc311549694666167a49cdb0fb1293c/2493a/gojo.webp"
                />
                <Avatar
                  alt="Gojo Satouro"
                  src="https://dimensaosete.com.br/static/7fc311549694666167a49cdb0fb1293c/2493a/gojo.webp"
                />
                <Avatar
                  alt="Gojo Satouro"
                  src="https://dimensaosete.com.br/static/7fc311549694666167a49cdb0fb1293c/2493a/gojo.webp"
                />
                <Box backgroundColor='cyan' borderRadius={3} p={1}>
                  <Typography variant="subtitle1">+500</Typography>
                </Box>
              </Box> */}
              <Chip
                label="Super feature coming soon"
                style={{ backgroundColor: "#FFED9E", marginBottom: 20 }}
              />
            </Grid>
          </Grid>
          <Typography variant="h1" fontWeight={600}>
            Your I.A assistant to help <br /> All Your services & chat support
          </Typography>
          <Typography mt={2}>
            Final tool to work on a par with your, store everything in one
            place, <br /> and organize chats the way you want.
          </Typography>
          <video width="70%" controls>
            <source src={videoURL} type="video/mp4" />
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        </section>

        {/* About the project Section */}
        <section id="features" className="features">
          <h2>About the project</h2>
          <div className="feature-list">
            <div className="feature">
              <h3>AI-Powered Content Generation</h3>
              <p>
                Generate articles, blog posts, and creative content with ease
                using our AI-driven tools.
              </p>
            </div>
            <div className="feature">
              <h3>Personalized Assistance</h3>
              <p>
                Get personalized AI suggestions and assistance tailored to your
                needs.
              </p>
            </div>
            <div className="feature">
              <h3>Workflow Integration</h3>
              <p>
                Integrate with your existing tools and workflows to maximize
                efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing">
          <Typography variant="h2" fontWeight={600} style={{ color: "black" }}>
            Pricing Plans
          </Typography>
          <Typography>
            Life is short why spent to design from scratch, Use finalui
            templates and its dummy <br /> text like lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>
          <div className="pricing-list">
            <div className="pricing-option">
              <h3>Free Plan</h3>
              <Typography
                align="left"
                fontWeight={800}
                style={{ fontSize: 50, color: "black" }}>
                $0
              </Typography>
              <Typography align="left" mt={1} mb={1}>
                Basic features to get you started with AI-generated content.
              </Typography>
              <Typography align="left">✅ 1000 requests</Typography>
              <Typography align="left">✅ Suport by Author</Typography>
              <Typography align="left" mb={2}>
                ✅ Imaginary feature
              </Typography>
              <Button variant="outlined" fullWidth>
                GET STARTED
              </Button>
            </div>

            <div className="pricing-option">
              <h3>Pro Plan</h3>
              <Typography
                align="left"
                fontWeight={800}
                style={{ fontSize: 50, color: "black" }}>
                $0
              </Typography>
              <Typography align="left" mt={1} mb={1}>
                Advanced features and integrations for professionals.
              </Typography>
              <Typography align="left">✅ 2000 requests</Typography>
              <Typography align="left">✅ Suport by Author</Typography>
              <Typography align="left" mb={2}>
                ✅ Imaginary feature
              </Typography>
              <Button variant="contained" fullWidth>
                GET STARTED
              </Button>
            </div>

            <div className="pricing-option">
              <h3>Enterprise Plan</h3>
              <Typography
                align="left"
                fontWeight={800}
                style={{ fontSize: 50, color: "black" }}>
                $Offer
              </Typography>
              <Typography align="left" mt={1} mb={1}>
                Full access to all features, custom solutions, and dedicated
                support.
              </Typography>
              <Typography align="left">✅ 2000 requests</Typography>
              <Typography align="left">✅ Suport by Author</Typography>
              <Typography align="left" mb={2}>
                ✅ Imaginary feature
              </Typography>
              <Button variant="outlined" fullWidth>
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}>
            <p>
              &copy; {new Date().getFullYear()} Craft Desk. All rights reserved.
            </p>
            <p>Have questions? Get in touch with our team!</p>
            <a href="mailto:contatomathmatos@gmail.com">
              contatomathmatos@gmail.com
            </a>
          </Box>
        </footer>
      </div>
      {/* 
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;
