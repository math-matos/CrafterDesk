import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import logo from "./assets/logo2.png";

import "./css/HomePage.css";
import { Button, Chip } from "@mui/material";

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
          <Chip
            label="Super feature coming soon"
            style={{ backgroundColor: "#FFED9E", marginBottom: 20 }}
          />
          <h1>
            Your I.A assistant to help <br /> All Your services & chat support
          </h1>
          <p>
            Final tool to work on a par with your, store everything in one
            place, <br /> and organize chats the way you want.
          </p>
          <video width="70%" controls>
            <source src={videoURL} type="video/mp4" />
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2>Features</h2>
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
          <h2>Pricing</h2>
          <div className="pricing-list">
            <div className="pricing-option">
              <h3>Free Plan</h3>
              <p>
                Basic features to get you started with AI-generated content.
              </p>
              <p className="price">$0</p>
            </div>
            <div className="pricing-option">
              <h3>Pro Plan</h3>
              <p>Advanced features and integrations for professionals.</p>
              <p className="price">$29/mo</p>
            </div>
            <div className="pricing-option">
              <h3>Enterprise Plan</h3>
              <p>
                Full access to all features, custom solutions, and dedicated
                support.
              </p>
              <p className="price">Contact Us</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>Have questions? Get in touch with our team!</p>
          <Button
            href="mailto:contatomathmatos@gmail.com"
            variant="contained"
            style={{ height: "3rem" }}>
            Email Us
          </Button>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Craft Desk. All rights reserved.
          </p>
        </footer>
      </div>
      {/* 
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;
