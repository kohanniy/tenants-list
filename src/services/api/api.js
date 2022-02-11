import api from './instanceApi';

const errorsHandler = (error) => {
  if (error.response) {
    console.log(error.response.data);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
}

export const getData = async (path, config = null) => {
  try {
    const { data } = await api.get(path, config);
    return data;
  } catch (err) {
    errorsHandler(err);
  }
};