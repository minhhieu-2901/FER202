function Ex1() {
  return (
    <div className="container mt-5">
      <h1 style={{ textAlign: "center" }}>EX1</h1>
      <div className="bg-body-secondary p-5 mb-4">
        <h2>Let's test the grid!</h2>
      </div>

      <div className="row">
        <div className="col-6 border bg-body-secondary p-2">First col</div>

        <div className="col-6 border bg-body-secondary p-2">Second col</div>
      </div>

      <div className="row">
        <div className="col-4 border bg-body-secondary p-2">col</div>

        <div className="col-4 border bg-body-secondary p-2">col</div>

        <div className="col-4 border bg-body-secondary p-2">col</div>
      </div>

      <div className="row">
        <div className="col-3 border bg-body-secondary p-2">col</div>

        <div className="col-3 border bg-body-secondary p-2">col</div>

        <div className="col-3 border bg-body-secondary p-2">col</div>

        <div className="col-3 border bg-body-secondary p-2">col</div>
      </div>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>EX2</h1>

      <div className="container mt-2">
        <div className="bg-body-secondary text-center p-5 mb-4">
          <h2>My First Bootstrap Page</h2>
        </div>

        <div className="row text-center">
          <div className="col-4">
            <img src="/images/html.png" alt="HTML" width="180" />
          </div>

          <div className="col-4">
            <img src="/images/css.png" alt="CSS" width="180" />
          </div>

          <div className="col-4">
            <img src="/images/bootstrap.png" alt="Bootstrap" width="180" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>EX3</h1>

      <div className="container mt-4">
        <div className="bg-body-secondary p-5 mb-4">
          <h2>Let's test the grid!</h2>
        </div>

        <ul className="nav mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>

        <div className="row">
          <div className="col-6 border bg-body-secondary p-2">First col</div>

          <div className="col-6 border bg-body-secondary p-2">Second col</div>
        </div>

        <div className="row">
          <div className="col-4 border bg-body-secondary p-2">col</div>

          <div className="col-4 border bg-body-secondary p-2">col</div>

          <div className="col-4 border bg-body-secondary p-2">col</div>
        </div>

        <div className="row">
          <div className="col-3 border bg-body-secondary p-2">col</div>

          <div className="col-3 border bg-body-secondary p-2">col</div>

          <div className="col-3 border bg-body-secondary p-2">col</div>

          <div className="col-3 border bg-body-secondary p-2">col</div>
        </div>
      </div>

      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>EX4</h1>

      <div className="container mt-3">
        <header className="text-center bg-warning p-2">
          <img
            src="/images/fpt.png"
            alt="FPT University"
            width="320"
            className="bg-white"
          />

          <div>
            <a href="#" className="text-white text-decoration-none mx-1">
              Home
            </a>

            <a href="#about" className="text-white text-decoration-none mx-1">
              About
            </a>

            <a href="#contact" className="text-white text-decoration-none mx-1">
              Contact
            </a>
          </div>
        </header>

        <section className="text-center my-4">
          <h5 className="fw-bold">About</h5>
          <p>This is the about section of the website.</p>
        </section>

        <section className="text-center my-4">
          <h5 className="fw-bold">Contact</h5>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>

        <footer className="text-center bg-warning text-white p-3">
          © 2023 Website. All rights reserved.
        </footer>
      </div>

      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>EX5</h1>

      <div className="text-center bg-warning p-3">
        <img src="/images/fpt.png" alt="FPT" width="150" />

        <div>
          <a href="#" className="text-white mx-1">
            Home
          </a>

          <a href="#" className="text-white mx-1">
            About
          </a>

          <a href="#" className="text-white mx-1">
            Contact
          </a>
        </div>
      </div>

      <h4 className="text-center mt-4">Images Detail</h4>

      <div className="row">
        <div className="col-6">
          <div className="card">
            <img src="/images/html.png" className="card-img-top" alt="HTML" />

            <div className="card-body text-center">
              <h5>HTML</h5>
              <p>HTML is used to create the structure of a website.</p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card">
            <img src="/images/css.png" className="card-img-top" alt="CSS" />

            <div className="card-body text-center">
              <h5>CSS</h5>
              <p>CSS is used to style a website.</p>
            </div>
          </div>
        </div>

        <div className="col-6 mt-3">
          <div className="card">
            <img
              src="/images/bootstrap.png"
              className="card-img-top"
              alt="Bootstrap"
            />

            <div className="card-body text-center">
              <h5>Bootstrap</h5>
              <p>Bootstrap is a CSS framework.</p>
            </div>
          </div>
        </div>

        <div className="col-6 mt-3">
          <div className="card">
            <img src="/images/fpt.png" className="card-img-top" alt="FPT" />

            <div className="card-body text-center">
              <h5>FPT University</h5>
              <p>FPT University</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-warning text-center p-4 mt-4">
        © Copyright 2023
      </footer>
    </div>
  );
}

export default Ex1;
