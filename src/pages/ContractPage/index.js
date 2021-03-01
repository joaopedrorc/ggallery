import React from 'react';
import { Link } from 'react-router-dom';

import { Styles, ContainerBox } from './styles';
import { Container } from 'react-bootstrap';

import AllServices from '../../components/AllServices';
import UpperFooter from '../../components/UpperFooter';
import Title from '../../components/Title';
import BackgroundServices from './BackgroundServices';

import Service02 from '../../assets/generalServices/service02.png';
import Service04 from '../../assets/generalServices/cleaning0.png';
import Service07 from '../../assets/generalServices/service07.png';

function ContractPages() {
  return (
    <Styles>
      <BackgroundServices />

      <Title title="The Importance of contracts" />

      <Container className="mb-4">
        <h2 className="text-center mb-5">
          Contracts provide a written document that outlines the full
          understanding of the business relationship and scope of the work so
          that no one can claim any misunderstandings later down the road.
        </h2>
        <ul className="fa-ul">
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                className="bi bi-shield-fill-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                />
              </svg>
            </span>
            <div className="li-container">
              They specify exactly what rights are being purchased and what
              rights you’re retaining.
            </div>
          </li>

          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                className="bi bi-shield-fill-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                />
              </svg>
            </span>
            <div className="li-container">
              They’re binding and legally enforceable.{' '}
            </div>
          </li>
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                className="bi bi-shield-fill-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                />
              </svg>
            </span>
            <div className="li-container">
              They outline expectations for both parties, protect both parties
              and lock in the price that will be paid for services.{' '}
            </div>
          </li>
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                className="bi bi-shield-fill-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                />
              </svg>
            </span>
            <div className="li-container">
              It’s a mark of our professionalism.{' '}
            </div>
          </li>
          <li className="d-flex justify-content-center align-items-center">
            <span className="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                className="bi bi-shield-fill-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                />
              </svg>
            </span>
            <div className="li-container">
              We offer a fully fitted job with warranty.{' '}
            </div>
          </li>
        </ul>
      </Container>
      <Container>
        <Title title="Contract needed services" />

        <div className="w-100 pb-5 pt-lg-2 pb-lg-5">
          <div className="container pt-2 pb-2 pt-lg-2 pb-lg-0">
            <div className="row mb-1">
              <div className="col-12 col-md-12 col-lg-4 mb-5">
                <div className="card shadow border-0">
                  <div className="position-relative">
                    <Link to="/garden-maintenance">
                      <img
                        src={Service02}
                        className="card-img-top"
                        alt="Garden maintenance"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="/garden-maintenance" className="btn card-button">
                      Garden maintenance
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mb-5">
                <div className="card shadow border-0">
                  <div className="position-relative">
                    <Link to="/office-cleaning">
                      <img
                        src={Service04}
                        className="card-img-top"
                        alt="Office cleaning"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="/office-cleaning" className="btn card-button">
                      Office cleaning
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 mb-5">
                <div className="card shadow border-0">
                  <div className="position-relative">
                    <Link to="/window-cleaning">
                      <img
                        src={Service07}
                        className="card-img-top"
                        alt="Window cleaning"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="/window-cleaning" className="btn card-button">
                      Window cleaning
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ContainerBox>
        <Link className="link-button btn p-2 mb-5" to="/get-a-quote">
          Get a free quote
        </Link>
      </ContainerBox>

      <AllServices />

      <UpperFooter />
    </Styles>
  );
}

export default ContractPages;
