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

const getListBrand = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/brand/list/${size}/${page}`, {
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

const deleteBrand = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/brand/delete/${id}`, {
      method: 'DELETE',
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

const createModel = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/model/add`, {
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

const getListModel = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/brand/model/${size}/${page}`, {
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

const getModel = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/model/get/${id}`, {
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

export default {
  signIn,
  getListBrand,
  createBrand,
  getBrand,
  editBrand,
  deleteBrand,
  getListModel,
  createModel,
  getModel
};
