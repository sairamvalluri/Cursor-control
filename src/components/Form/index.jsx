import React from 'react'
import * as yup from 'yup'
import {Formik, Form, useField} from 'formik'
import {Input, Label, Error, Submit} from './styles'

const InputComponent = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <Label>
      {label}: {meta.touched && meta.error && <Error> {meta.error} </Error>}
      <Input {...field} {...props} />
    </Label>
  )
}

const FormComponent = ({handleSuccess}) => {
  const schema = yup.object().shape({
    name: yup.string().required('Required field'),
    email: yup
      .string()
      .email('Must be a valid email address')
      .required('Required field')
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: ''
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <InputComponent
            name="name"
            type="text"
            label="Name"
            autocomplete="off"
          />
          <InputComponent
            name="email"
            type="email"
            label="Email"
            autocomplete="off"
          />

          <Submit type="submit">Submit</Submit>
        </Form>
      )}
    </Formik>
  )
}

export default FormComponent
