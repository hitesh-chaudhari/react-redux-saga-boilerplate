import request from 'superagent';
import urljoin from 'url-join';
import config from 'config';

function send(endpoint, payload, token) {
  return new Promise((resolve, reject) => {
    const url = urljoin(config.account.address, endpoint);

    const req = request
      .post(url)
      .accept('json')
      .type('json');

    if (token) {
      req.set('Authorization', token);
    }

    req.send(payload).end((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

function mapResult(result) {
  return result.body;
}

function mapError(err) {
  return {
    error: {
      status: err.status,
      data: err.response.body,
    },
  };
}

export function register(name, email, inviteCode) {
  const payload = {
    name,
    email,
  };

  return send('/accounts', payload, inviteCode)
    .then(mapResult)
    .catch(mapError);
}

export function activate(token, password) {
  const payload = {
    token,
    pwd: password,
  };

  return send('/accounts/activate', payload)
    .then(mapResult)
    .catch(mapError);
}

export function interest(name, email) {
  const payload = {
    name,
    email,
  };

  return send('/accounts/interest', payload);
}
