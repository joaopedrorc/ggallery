/* eslint-disable no-undef */
import React, { useRef } from 'react';

import { Styles, WhatsAppButton, WhatsAppButtonContainer } from './styles';
import { Container } from 'react-bootstrap';
import Title from '../Title';

function QuoteForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert('SUCCESS! Form sent.');
        },
        (error) => {
          alert('FAILED... something went wrong');
          console.error(error);
        }
      );
  };

  return (
    <Styles>
      <Container>
        <Title title="Contact us via WhatsApp" />
        <WhatsAppButtonContainer>
          <WhatsAppButton
            href="https://wa.me/+447305082737?text=Hi,%20I%20came%20from%20the%20website.%20I'd%20like%20to%20get%20a%20quote!"
            rel="noreferrer"
            target="_blank"
            className="whatsapp-button"
          >
            <span>WhatsApp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </WhatsAppButton>
        </WhatsAppButtonContainer>

        <Title title="Or send us an email" />

        <div className="formContainer">
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label>Full name:*</label>
            <input
              type="text"
              name="client_name"
              placeholder="Enter your full name"
              required
            />

            <label>Phone number:*</label>
            <input
              type="text"
              name="client_phone"
              placeholder="Enter your phone number"
              required
            />

            <label>Email address:*</label>
            <input
              type="email"
              name="client_email"
              placeholder="Enter your email"
              required
            />

            <label>Where is the service?*</label>
            <div className="checkboxGroup">
              <label>Business</label>
              <input type="radio" value="Business" name="client_check" />
              <label>Residence</label>
              <input
                type="radio"
                value="Residence"
                name="client_check"
                defaultChecked
              />
            </div>

            <label>Area:*</label>
            <select name="client_area" required>
              <option label="Select an area"></option>
              <option value="Bramley">Basingstoke</option>
              <option value="Bramley">Bramley</option>
              <option value="Rotherwick">Rotherwick</option>
              <option value="Silchester">Silchester</option>
              <option value="Hannington">Hannington</option>
              <option value="North Waltham">North Waltham</option>
              <option value="Odiham">Odiham</option>
              <option value="Steventon">Steventon</option>
              <option value="Preston Candover">Preston Candover</option>
              <option value="Mortimer Common">Mortimer Common</option>
              <option value="Kingsclere">Kingsclere</option>
              <option value="Bentworth">Bentworth</option>
              <option value="Alton">Alton</option>
              <option value="Four Marks">Four Marks</option>
              <option value="Burghclere">Burghclere</option>
              <option value="Crondall">Crondall</option>
              <option value="Fleet">Fleet</option>
              <option value="Bradfield">Bradfield</option>
              <option value="Reading">Reading</option>
              <option value="Farnham">Farnham</option>
              <option value="Bracknell">Bracknell</option>
              <option value="Aldershot">Aldershot</option>
              <option value="Whitchurch">Whitchurch</option>
              <option value="Selborne">Selborne</option>
            </select>

            <label>Service:*</label>
            <select name="client_service" required>
              <option label="Select a service"></option>
              <option value="Bathroom renovation">Bathroom renovation</option>
              <option value="Erecting fence">Erecting fence</option>
              <option value="Garden storage shed">Garden storage shed</option>
              <option value="Insulated garden room/office/studio">
                Insulated garden room/office/studio
              </option>
              <option value="Heating and plumbing">Heating and plumbing</option>
              <option value="Garden maintenance">Garden maintenance</option>
              <option value="Painting and decoration">
                Painting and decoration
              </option>
              <option value="Commercial office cleaning">
                Commercial office cleaning
              </option>
              <option value="Flooring/tiles Installation">
                Flooring/tiles Installation
              </option>
              <option value="Window cleaning">Window cleaning</option>
              <option value="Eletrical services">Eletrical services</option>
            </select>

            <label>How can we help you?</label>
            <textarea
              name="client_message"
              rows="3"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </Container>
    </Styles>
  );
}

export default QuoteForm;
