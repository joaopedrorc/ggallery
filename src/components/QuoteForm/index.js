import React, { useState } from 'react';

import { Styles } from './styles';

import { Container, Form, Button } from 'react-bootstrap';

import Title from '../Title';

function QuoteForm() {
  const [validated, setValidated] = useState(false);
  // const [campos, setCampos] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   location: '',
  //   area: '',
  //   service: '',
  //   message: '',
  //   files: '',
  // });
  // function handleInputChange(event) {
  //   if (event.target.name === 'files')
  //     campos[event.target.name] = event.target.files[0];
  //   else campos[event.target.name] = event.target.value;
  //   setCampos(campos);
  // }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Styles>
      <Container>
        <Title title="Get a free quote" />

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
                    <Form.Group controlId="formName">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control
                        required
                        type="phone"
                        placeholder="Enter your phone number"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  {/* <div className="row"> */}

                  <div class="col-12 col-md-12 col-lg-6 mt-3 d-flex flex-column justify-content-end">
                    <div className="d-flex flex-column">
                      <Form.Label>Where is the service?</Form.Label>
                      {/* <div className="d-flex flex-row check-container"> */}

                      <Form.Group className="mr-2">
                        <Form.Check
                          required
                          custom
                          inline
                          id="formCheckboxFirst"
                          type="radio"
                          label="Business"
                          name="formCheck"
                        />

                        <Form.Check
                          required
                          custom
                          inline
                          id="formCheckboxSecond"
                          type="radio"
                          label="Residence"
                          name="formCheck"
                        />
                      </Form.Group>
                      {/* </div> */}
                    </div>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="formArea">
                      <Form.Label>Area</Form.Label>
                      <Form.Control as="select" required>
                        <option label="Select an area"></option>
                        <option>Default select</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select a area.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3"></div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="formService">
                      <Form.Label>Service</Form.Label>
                      <Form.Control as="select" required>
                        <option label="Select a service"></option>

                        <option value="0">Default select</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select a service.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div class="form-floating col-12 col-md-12 col-lg-12 mb-3">
                    <Form.Group controlId="formTextarea">
                      <Form.Label>How can we help you?</Form.Label>

                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="formextarea"
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
                    <Form.Group>
                      <Form.Label>Upload your photos!</Form.Label>

                      <Form.Control
                        required
                        className="position-relative"
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
