import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import * as Yup from 'yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
  handleNext: () => void
}

const FormThree: React.FC<Props> = ({ handleNext }) => {

  return (
    <Formik
      initialValues={{ Email: '', Password: '' }}
      validationSchema={Yup.object({
        Email: Yup.string()
        .max(25, 'Must be 10 or More than characters or less')
        .required('Required'),
        Password: Yup.string()
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
            <Field style={{ margin: "20px" }} name="Email" id="standard-basic" label="Email" type="text" component={TextField} />
            <ErrorMessage name="Email" />

            <br />
            <Field style={{ margin: "20px" }} name="Password" id="standard-basic" label="Password" type="Password" component={TextField} />
            <ErrorMessage name="Password" />
            <br />
            <br />
            <Button style={{ padding: "10px", width: "20%" }} type="submit" variant="contained" color="primary">Submit</Button>
          </Form>
        </Box>
      </Grid>
    </Formik>

  );
};

export default FormThree;