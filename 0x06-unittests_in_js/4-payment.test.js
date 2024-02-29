const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls with correct arguments', () => {
    const consoleLog = sinon.spy(Utils);
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(consoleLog.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleLog.log.callCount).to.be.equal(1);
    calculateNumberStub.restore();
    consoleLog.log.restore();
  });
});
