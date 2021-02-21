import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Styles } from './styles';
import { Container, Form, Button } from 'react-bootstrap';
import Title from '../Title';

function QuoteForm() {
  // const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    check: 'Residence',
    area: '',
    service: '',
    message: '',
    files: [],
  });
  const [result, setResult] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: '',
          phone: '',
          email: '',
          check: '',
          area: '',
          service: '',
          message: '',
          files: [],
        });
      })
      .catch((err) => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later',
        });
        console.warn('error during call 0', err);
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onSelectChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    const onFileUpload = () => {
      console.log(selectedFiles);

      var imageUrl = [];

      for (var i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();

        console.log(selectedFiles[i]);

        formData.append('file', selectedFiles[i]);
        formData.append('upload_preset', 'l4ptbrhf');

        axios
          .post(
            'https://api.cloudinary.com/v1_1/dtemoigqh/image/upload',
            formData
          )
          .then((res) => {
            // setSearches([query].concat(searches))
            // console.log(res);
            imageUrl.push(res.data.secure_url);
            console.log('current img', res.data.secure_url);
            console.log('current url', imageUrl);
            // setState({
            //   ...state,
            //   files: res.data.secure_url,
            // });
            // console.log('state', state);
          })
          .catch((err) => {
            console.error(err);
          });
      }

      setState({
        ...state,
        files: [imageUrl].concat(state.files),
      });
      console.log('state', state);
      console.log('final url', imageUrl);
    };
    onFileUpload();
  }, [selectedFiles]);

  return (
    <Styles>
      <Container>
        <Title title="Contact us" />
        <div className="row mb-4">
          <div className="col-md-12 container-col">
            <div className="container-size">
              <form
                className="pb-lg-2"
                // noValidate
                // validated={validated}
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div class="col-12 col-md-12 col-lg-12 mb-3">
                    <Form.Group controlId="name">
                      <Form.Label>Full Name:</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        value={state.name}
                        placeholder="Enter full your name"
                        onChange={onInputChange}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback> */}
                    </Form.Group>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="phone">
                      <Form.Label>Phone number:</Form.Label>
                      <Form.Control
                        // data-mask="+44 0000 000 000"
                        name="phone"
                        type="text"
                        value={state.phone}
                        placeholder="Enter your phone number"
                        onChange={onInputChange}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your phone number.
                      </Form.Control.Feedback> */}
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email address:</Form.Label>
                      <Form.Control
                        required
                        aria-describedby="emailHelp"
                        type="email"
                        name="email"
                        value={state.email}
                        placeholder="Enter your email"
                        onChange={onInputChange}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your email.
                      </Form.Control.Feedback> */}
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mt-3 d-flex flex-column justify-content-end">
                    <div className="d-flex flex-column">
                      <Form.Label>Where is the service?</Form.Label>

                      <Form.Group className="mr-2">
                        <label className="mr-2">Business</label>
                        <input
                          className="mr-2"
                          type="checkbox"
                          value="Business"
                          checked={state.check === 'Business'}
                          onChange={(e) =>
                            setState({
                              ...state,
                              check: e.target.value,
                            })
                          }
                        />

                        <label className="mr-2">Residence</label>
                        <input
                          className="mr-2"
                          type="checkbox"
                          value="Residence"
                          checked={state.check === 'Residence'}
                          onChange={(e) =>
                            setState({
                              ...state,
                              check: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="area">
                      <Form.Label>Area:</Form.Label>
                      <Form.Control
                        as="select"
                        name="area"
                        onChange={onSelectChange}
                        value={state.area}
                      >
                        <option label="Select an area"></option>
                        <option value="Bramley">Basingstoke</option>
                        <option value="Bramley">Bramley</option>
                        <option value="Rotherwick">Rotherwick</option>
                        <option value="Silchester">Silchester</option>
                        <option value="Hannington">Hannington</option>
                        <option value="North Waltham">North Waltham</option>
                        <option value="Odiham">Odiham</option>
                        <option value="Steventon">Steventon</option>
                        <option value="Preston Candover">
                          Preston Candover
                        </option>
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
                      </Form.Control>
                      {/* <Form.Control.Feedback type="invalid">
                        Please select a area.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                  </div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3"></div>

                  <div class="col-12 col-md-12 col-lg-6 mb-3">
                    <Form.Group controlId="service">
                      <Form.Label>Service:</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="service"
                        onChange={onSelectChange}
                        value={state.service}
                      >
                        <option label="Select a service"></option>
                        <option value="Bathroom renovation">
                          Bathroom renovation
                        </option>
                        <option value="Erecting fence">Erecting fence</option>
                        <option value="Garden storage shed">
                          Garden storage shed
                        </option>
                        <option value="Insulated garden room/office/studio">
                          Insulated garden room/office/studio
                        </option>
                        <option value="Heating and plumbing">
                          Heating and plumbing
                        </option>
                        <option value="Garden maintenance">
                          Garden maintenance
                        </option>
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
                        <option value="Eletrical services">
                          Eletrical services
                        </option>
                      </Form.Control>
                      {/* <Form.Control.Feedback type="invalid">
                        Please select a service.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                  </div>

                  <div class="form-floating col-12 col-md-12 col-lg-12 mb-3">
                    <Form.Group controlId="textarea">
                      <Form.Label>How can we help you?</Form.Label>

                      <Form.Control
                        as="textarea"
                        name="message"
                        value={state.message}
                        rows="3"
                        placeholder="Enter your message"
                        onChange={onInputChange}
                      />

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
                        multiple
                        className="position-relative"
                        type="file"
                        name="file"
                        onChange={(event) => {
                          setSelectedFiles(event.target.files);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose your images.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>{' '}
                    </Form.Group>
                  </div>
                </div>
                <Button variant="primary" type="submit">
                  {/* <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span> */}
                  Submit
                </Button>
              </form>
              {result &&
                (result.success ? (
                  <div className="success-message">{result.message}</div>
                ) : (
                  <div className="error-message">{result.message}</div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
}

export default QuoteForm;
