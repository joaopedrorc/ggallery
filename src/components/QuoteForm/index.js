import React, { useState } from 'react';
import axios from 'axios';

import { Styles } from './styles';
import { Container, Form, Button } from 'react-bootstrap';
import Title from '../Title';

function QuoteForm() {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    check: '',
    area: '',
    service: '',
    message: '',
    file: '',
  });

  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('We will fill this up shortly.', state);

    // event.preventDefault();
    // axios
    //   .post('/api', { ...state })
    //   .then((response) => {
    //     setResult(response.data);
    //     setState({
    //       name: '',
    //       phone: '',
    //       email: '',
    //       check: '',
    //       area: '',
    //       service: '',
    //       message: '',
    //       file: '',
    //     });
    //   })
    //   .catch(() => {
    //     setResult({
    //       success: false,
    //       message: 'Something went wrong. Try again later',
    //     });
    //   });
  };

  const onCheckChange = (myRadio) => {
    setState({
      ...state,
      check: myRadio.value,
    });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'file') state[name] = event.target.files[0];
    else state[name] = event.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Styles>
      <Container>
        <Title title="Contact us" />
        {result && (
          <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
          </p>
        )}
        <div className="row mb-4">
          <div className="col-md-12 container-col">
            <div className="container-size">
              <Form
                className="pb-lg-2"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div class="col-12 col-md-12 col-lg-12 mb-3">
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        value={state.name}
                        placeholder="Enter your name"
                        onChange={onInputChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="phone">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control
                        required
                        name="phone"
                        type="text"
                        value={state.phone}
                        placeholder="Enter your phone number"
                        onChange={onInputChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={state.email}
                        placeholder="Enter your email"
                        onChange={onInputChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mt-3 d-flex flex-column justify-content-end">
                    <div className="d-flex flex-column">
                      <Form.Label>Where is the service?</Form.Label>

                      <Form.Group className="mr-2" required>
                        <Form.Check
                          custom
                          inline
                          id="formCheckboxFirst"
                          type="radio"
                          label="Business"
                          name="check"
                          value="Business"
                          onclick={onCheckChange}
                        />

                        <Form.Check
                          required
                          custom
                          inline
                          id="formCheckboxSecond"
                          type="radio"
                          label="Residence"
                          name="check"
                          value="Residence"
                          onclick={onCheckChange}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="area">
                      <Form.Label>Area</Form.Label>
                      <Form.Control
                        as="select"
                        required
                        name="area"
                        value={state.area}
                      >
                        <option label="Select an area"></option>
                        <option value="0">Bramley</option>
                        <option value="1">Rotherwick</option>
                        <option value="2">Silchester</option>
                        <option value="4">Hannington</option>
                        <option value="5">North Waltham</option>
                        <option value="0">Odiham</option>
                        <option value="0">Steventon</option>
                        <option value="0">Preston Candover</option>
                        <option value="0">Mortimer Common</option>
                        <option value="0">Kingsclere</option>
                        <option value="0">Bentworth</option>
                        <option value="0">Alton</option>
                        <option value="0">Four Marks</option>
                        <option value="0">Burghclere</option>
                        <option value="0">Crondall</option>
                        <option value="0">Fleet</option>
                        <option value="0">Bradfield</option>
                        <option value="0">Reading</option>
                        <option value="0">Farnham</option>
                        <option value="0">Bracknell</option>
                        <option value="0">Aldershot</option>
                        <option value="0">Whitchurch</option>
                        <option value="0">Selborne</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select a area.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3"></div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="service">
                      <Form.Label>Service</Form.Label>
                      <Form.Control
                        as="select"
                        required
                        name="service"
                        value={state.service}
                      >
                        <option label="Select a service"></option>
                        {/* <option value="0">Default select</option> */}
                        <option>Bathroom renovation</option>
                        <option>Erecting fence</option>
                        <option>Garden storage shed</option>
                        <option>Insulated garden room/office/studio</option>
                        <option>Heating and plumbing</option>
                        <option>Roof cleaning</option>
                        <option>Garden maintenance</option>
                        <option>Painting and decoration</option>
                        <option>Commercial office cleaning</option>
                        <option>Flooring/tiles Installation</option>
                        <option>Window cleaning</option>
                        <option>Eletrical services</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select a service.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div class="form-floating col-12 col-md-12 col-lg-12 mb-3">
                    <Form.Group controlId="textarea">
                      <Form.Label>How can we help you?</Form.Label>

                      <textarea
                        class="form-control"
                        name="message"
                        value={state.message}
                        placeholder="Enter your message"
                        id="formextarea"
                        onChange={onInputChange}
                        style={{ height: '100px' }}
                      ></textarea>

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                      <Form.Text className="text-muted">
                        Send detailed information and good quality photos for a
                        more precise quotation.
                      </Form.Text>
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-12 mb-3">
                    <Form.Group controlId="file">
                      <Form.Label>Upload your photos!</Form.Label>

                      <Form.Control
                        required
                        className="position-relative"
                        name="file"
                        alue={state.file}
                        id="formValidation"
                        type="file"
                        feedbackTooltip
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose your images.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>

                {/* </div> */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
}

export default QuoteForm;
