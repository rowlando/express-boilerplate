import test from 'ava';
import sinon from 'sinon';
import getHomepage from '../../src/routes/home/getHomepage';

test('GET /', t => {
  const msg = "it should render";

  let req, res, spy;
  req = res = {};
  spy = res.render = sinon.spy();

  getHomepage(req, res);

  const actual = spy.calledWith('index', { title: 'Express' });
  const expected = true;

  t.is(expected, actual, msg);
});
