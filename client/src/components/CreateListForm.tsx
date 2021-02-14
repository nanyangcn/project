import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { TodoList } from '../state/types/todoListsTypes';

const ListSchema = Yup.object().shape({
  title: Yup.string()
    .max(140, 'Length cannot be over 140 characters!'),
});

interface Props {
  handleCreateTodoList: ( values: TodoList ) => void
}

const CreateListForm: React.FC<Props> = ({ handleCreateTodoList }: Props) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={ListSchema}
        onSubmit={(values) => { handleCreateTodoList({ ...values, done: false });}}
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