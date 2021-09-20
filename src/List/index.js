import { Fade } from "react-reveal";

export default function List() {
  return (
    <div>
      <Fade bottom>
        <div className="row p-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/Reservation.png"
                className="card-img-top"
                alt="Restaurant Reservation System"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Restaurant Reservation System
                </h5>
                <p className="card-text">
                  A full-stack application that simulates a Restaurant
                  Reservation system; built with React, Node.js, Express, and
                  Bootstrap.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/JohnDeveloper312/RestaurantReservation"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://fc-capstone-client.herokuapp.com/dashboard"
                    className="btn btn-warning"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Heroku Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/movies.jpg"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">We Love Movies</h5>
                <p className="card-text">
                  Currently this is only the Back-end portion of the project.
                  Front-end forthcoming.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/JohnDeveloper312/thinkfulMovies"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/img6.png"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Operation Grub Dash</h5>
                <p className="card-text">
                  Yet another Back-end solution, but this time for an online
                  food-ordering system!
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/JohnDeveloper312/GrubDash"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/img.png"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Flashcards</h5>
                <p className="card-text">
                  A Front-end application with a UI for creating, and reviewing
                  decks of flash cards. Built with React and Bootstrap.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/JohnDeveloper312/FlashCardApp"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/img4.png"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Pomodoro Timer</h5>
                <p className="card-text">
                  An application that allows you to set a focus timer with a
                  working status bar to show remaining time available and
                  immediately goes into a break for the set duration.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/JohnDeveloper312/PomodoroTImer"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card text-white card-bg shadow my-2">
              <img
                src="images/img5.png"
                className="card-img-top"
                alt="Screenshot placeholder"
              />
              <div className="card-body">
                <h5 className="card-title text-center">This Portfolio!</h5>
                <p className="card-text">
                  This portfolio web page was built purely with React and
                  Bootstrap!
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/JohnDeveloper312/JohnPortfolio"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
