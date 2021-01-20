import axios from 'axios';

const main = async () => {
  try {
    const response = await axios.get('https://en.wikipedia.org/wiki/Special:Random');
    const URL = 'http://project-server-svc:2345/graphql';
    const CREATE_TODOLIST = `mutation {
                              addTodoList(
                                title: "${response.request.res.responseUrl}"
                              ) {
                                  title
                              }
                            }`;
    await axios.post(`${URL}`, { query: CREATE_TODOLIST });
  } catch (err) {
    console.error(err);
  }
}
void main();