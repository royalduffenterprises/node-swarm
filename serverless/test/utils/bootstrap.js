const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiThings = require('chai-things');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(chaiThings);

global.expect = chai.expect;
global.sinon = sinon;
global.Promise = require('bluebird');
