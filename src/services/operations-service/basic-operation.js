import { api } from '../axios-config';

export async function operation(data) {
  try {
    const response = api.post('/api/operation', data);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function sum(data) {
  try {
    api.post('api/sum', data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  } catch (error) {
    console.error(error);
  }
}

export async function subtract(data) {
  try {
    api.post('api/subtract', data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  } catch (error) {
    console.error(error);
  }
}

export async function multiply(data) {
  try {
    api.post('api/multiply', data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  } catch (error) {
    console.error(error);
  }
}

export async function division(data) {
  try {
    api.post('api/division', data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  } catch (error) {
    console.error(error);
  }
}

