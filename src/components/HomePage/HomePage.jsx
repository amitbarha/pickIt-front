import "./home-page.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="contact-me">
        {" "}
        <h2>האתר עדיין בבנייה ובהרצה ראשונית!</h2>
        <h3>לפרטים נוספים והצעות לשיפור:</h3>
        <br />
        <br />
        <div className="links-to-social">
          <a
            href="https://wa.me/972543043477"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="linkedin"
            />
          </a>
          <a href="mailto:amitbar131@gmail.com">
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/fluency/48/gmail-new.png"
              alt="linkedin"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-the-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
      <div className="loader-div">
        <div class="phone">
          <span class="loader"></span>
          <span class="text">...בקרוב</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
