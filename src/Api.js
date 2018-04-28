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
      method: 'GET',
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

export default { signIn, getListBrand };
