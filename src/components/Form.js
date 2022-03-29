// import React Bootstrap components here
import { Form, Col, Button } from 'react-bootstrap';

// import css modules
import cssModules from './Form.module.css';

const styles = {
  form: {
    margin: '16px 20% 0',
  },
  formGroup: {
    marginBottom: '16px',
  },
  formLabel: {
    marginBottom: '8px',
    display: 'inline-block',
  },
  formInput: {
    display: 'block',
    width: '100%',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#212529',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
  },
};

function FormComponent() {
  return (
    <div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.formLabel}>
            Username
          </label>
          <input
            id="username"
            placeholder="Input username"
            style={styles.formInput}
          />
        </div>
        <div className={cssModules.formGroup}>
          <label htmlFor="email" className={cssModules.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Input email"
            className={cssModules.formInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select id="gender" className="form-select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" />
          </Form.Group>
        </Form.Row>
        <Button variant="success" className="w-100 mt-5">
          Submit
        </Button>
        <button className="btn btn-danger w-100 mt-3">Cancel</button>
      </form>
    </div>
  );
}

export default FormComponent;
