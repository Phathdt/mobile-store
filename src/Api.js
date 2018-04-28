import { HOST } from 'Constants';

const signIn = async body => {
  try {
    let res = await fetch(`${HOST}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getListBrand = async (token, page) => {
  try {
    let res = await fetch(`${HOST}/brand/list/10/${page}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

const createBrand = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/brand/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getBrand = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/brand/get/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

const editBrand = async (token, id, body) => {
  try {
    let res = await fetch(`${HOST}/brand/update/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export default { signIn, getListBrand, createBrand, getBrand, editBrand };
