import React from 'react';

import { Styles, ContainerBox } from './styles';
// import { Container } from 'react-bootstrap';

import BackgroundServices from './BackgroundServices';
import ContractCarousel from './ContractCarousel';
import OfficeCleaning from './OfficeCleaning';
import WindowCleaning from './WindowCleaning';
import GardenMaintenance from './GardenMaintenance';
import AllServices from '../../components/AllServices';
import UpperFooter from '../../components/UpperFooter';
import Title from '../../components/Title';

function ContractPages() {
  return (
    <Styles>
      <BackgroundServices />
      <Title title="The Importance of contracts" />
      <ContainerBox className="mb-4">
        <h2 className="text-center mb-5">
          Contracts provide a written document that outlines the full
          understanding of the business relationship and scope of the work so
          that no one can claim any misunderstandings later down the road.
        </h2>
        <ul class="fa-ul">
          <li className="d-flex justify-content-center align-items-center">
            <span class="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                class="bi bi-shield-fill-check"
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
            <span class="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                class="bi bi-shield-fill-check"
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
            <span class="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                class="bi bi-shield-fill-check"
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
            <span class="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                class="bi bi-shield-fill-check"
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
            <span class="fa-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="#2156A2"
                class="bi bi-shield-fill-check"
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
      </ContainerBox>

      <ContractCarousel />

      <OfficeCleaning />

      <WindowCleaning />

      <GardenMaintenance />

      <AllServices />

      <UpperFooter />
    </Styles>
  );
}

export default ContractPages;
