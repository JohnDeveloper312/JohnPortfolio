export default function Footer() {
    return (
      <div className="footer align-items-center my-5">
        <div className="row d-flex">
          <div className="col-4 d-flex justify-content-center flex-column">
            <a
              className="text-white text-decoration-none link-light git-link text-center"
              href="https://github.com/JohnDeveloper312"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="text-white text-decoration-none link-light git-link text-center"
              href="https://docs.google.com/document/d/1ukMPnVoUn-G7-f4ptsuDcyk0eBTt9EAk3Hdmfplv8qs/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <p className="small text-white">© 2021 John Orfanakos</p>
          </div>
          <div className="col-4 d-flex justify-content-center flex-column">
            <a
              className="text-white text-decoration-none link-light git-link text-center"
              href="https://www.linkedin.com/in/johnorfanakos/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-white text-decoration-none link-light git-link text-center"
              href="mailto:johnorfanakos@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    );
  }