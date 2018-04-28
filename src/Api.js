import { HOST } from 'Constants';

const signIn = async body => {
  let res = await fetch(`${HOST}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return res;
};

function b() {}

export default { signIn, b };
