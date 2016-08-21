import test from 'ava';
import sinon from 'sinon';
import getUsers from '../../src/routes/users/getUsers';

test('GET Users', t => {
  const msg = "it should respond";

  let req, res, spy;
  req = res = {};
  spy = res.send = sinon.spy();

  getUsers(req, res);

  const actual = spy.calledOnce;
  const expected = true;

  t.is(expected, actual, msg);
});
