import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ListSchema = Yup.object().shape({
  title: Yup.string()
    .max(140, 'Length cannot be over 140 characters!'),
});

const CreateListForm: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={ListSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name='title'>
              {errors.title && touched.title
                ? (<div>{errors.title}</div>)
                : null}
            </Field>
            {' '}
            <button type='submit'>Create TODO</button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default CreateListForm;