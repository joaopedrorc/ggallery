import React from 'react';

import { Styles, Container } from './styles';

import Title from '../Title';

function About() {
  return (
    <Styles>
      <Title title="Why us ?" />
      <Container>
        <h2 className="text-center">
          Quality service, integrity and transparency are <br /> just some of
          the virtues of Danansan.
        </h2>
        <ul className="fa-ul">
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#2156A2"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </span>
            <div className="li-container">
              Providing all our customers with professional and honest work is
              our priority.
            </div>
          </li>

          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#2156A2"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </span>
            <div className="li-container">
              Fast service. We won't leave you waiting.{' '}
            </div>
          </li>
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#2156A2"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </span>
            <div className="li-container">
              Punctuality is the sole of our business.{' '}
            </div>
          </li>
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#2156A2"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </span>
            <div className="li-container">
              We have creative solutions to solve your problems.{' '}
            </div>
          </li>
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#2156A2"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </span>
            <div className="li-container">
              We offer a fully fitted job with warranty.{' '}
            </div>
          </li>
        </ul>
      </Container>
      <li className="row d-flex justify-content-center align-items-center">
        <span className="col-3 d-flex justify-content-end fa-li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill=" #e60000"
            class="bi bi-plus-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
          </svg>
        </span>
        {/* <div className="li-container">24/7 emergency repairs</div> */}
        <div className="col-3 d-flex justify-content-start sentence-right">
          24/7 emergency repairs
        </div>
        <a
          href="tel:+44 7414 765278"
          className="btn btn-danger call-button col-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          Call us now
        </a>

        <div className="col-3"></div>
      </li>
    </Styles>
  );
}

export default About;
