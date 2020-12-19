import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import * as Yup from 'yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Foam.css';

interface Props {
  handleNext: () => void
}

const FormOne: React.FC<Props> = ({ handleNext }) => {

  return (
    <Formik
      initialValues={{ firstName: '', LastName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        LastName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >

      <Grid container >
        <Box
          className="Box"
          bgcolor="background.paper"
          boxShadow='10px 20px 30px 30px #888888'
          m={6}
          p={4}
          style={{ width: '90%', height: '50%' }}
        >



          <Form>
            <h1>SignUp Multiple Foam</h1>
            <Field style={{ margin: "20px" }} name="firstName" id="standard-basic" label="FirstName" type="text" component={TextField} />
            <ErrorMessage name="firstName" />

            <br />
            <Field style={{ margin: "20px" }} name="LastName" id="standard-basic" label="LastName" type="text" component={TextField} />
            <ErrorMessage name="LastName" />
            <br />

            <span style={{ margin: "2px" }}>Gender:</span>
            <FormControlLabel style={{ margin: "2px" }} value="female" control={<Radio />} label="Female" />
            <FormControlLabel style={{ margin: "2px",marginBottom:"10px" }} value="male" control={<Radio />} label="Male" />


            <br />
            <Button style={{ padding: "10px", width: "20%" }} type="submit" variant="contained" color="primary">Submit</Button>
          </Form>
        </Box>
      </Grid>
    </Formik>

  );
};

export default FormOne;