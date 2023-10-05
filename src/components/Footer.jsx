import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <button className="register-btn">Register</button>
      <div style={{ height: "50px" }}></div>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-8">
          <h1 className="title">Gen-AI Hackathon 2023</h1>
        </div>
        <div className='links col-span-2'>
          <h1 className='links-title'>Links</h1>
          <a className='link' href='https://www.instagram.com/genaihack/'>Instagram</a>
          <a className='link' href='https://twitter.com/GenAiHack'>Twitter</a>
          <a className='link' href='https://https://docs.google.com/forms/'>Sponsor Us</a>
        </div>
        <div className="get-in-touch col-span-2">
          <h1 className="get-in-touch-title">Get in touch</h1>
          <a className="get-in-touch-link" href="mailto:genaihack@gmail.com">
            genaihack@gmail.com
          </a>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <p style={{ color: "white" }}>© 2023 Gen-Ai 23. All rights reserved.</p>
    </footer>
  );
}
