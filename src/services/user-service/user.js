import { api } from '../axios-config';

export async function createUser(data) {
  try {
    const response = api.post('api/user', data);

    return response;
  } catch (error) {
    console.error(error.response.data);
  }
}

export async function loginUser(data) {
  try {
    const response = api.post('api/auth/user', data);

    return response;
  } catch (error) {
    console.error(error);
  }
}
