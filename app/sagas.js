import accountSagas from 'services/account/sagas';
import sessionSagas from 'services/session/sagas';

const sagas = [accountSagas, sessionSagas];

export default sagas;
