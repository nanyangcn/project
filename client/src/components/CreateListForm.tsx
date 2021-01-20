import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ListSchema = Yup.object().shape({
  title: Yup.string()
    .max(140, 'Length cannot be over 140 characters!'),
});

interface Props {
  handleCreateTodoList: (values: { title: string } ) => void
}

const CreateListForm: React.FC<Props> = ({ handleCreateTodoList }: Props) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={ListSchema}
        onSubmit={(values) => { handleCreateTodoList(values);}}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name='title' />
            {errors.title && touched.title
              ? (<div>{errors.title}</div>)
              : null}
            {' '}
            <button type='submit'>Create TODO</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateListForm;