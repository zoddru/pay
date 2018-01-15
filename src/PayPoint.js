export default class PayPoint {
    constructor (prevPay = 0, prevFte = 0, multiplier = 1) {
        this._prevPay = prevPay;
        this._prevFte = prevFte;
        this._multiplier = multiplier;
    }
    
    get prevTotal() {
        return this._prevPay * this._prevFte;
    }
}