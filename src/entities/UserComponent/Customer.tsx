import Billing from "../ServiceDeliveryComponent/Billing";
import Shipping from "../ServiceDeliveryComponent/Shipping";
import User from "./User";

export default class Customer extends User {
  constructor(
    private _billing: Billing,
    private _shipping: Shipping,
    _id: number,
    _username: string,
    _password: string,
    _firstName: string,
    _lastName: string,
    _email: string,
    _role: string
  ) {
    super(_id, _username, _password, _firstName, _lastName, _email, _role);
  }

  get billing() {
    return this._billing;
  }

  set billing(value) {
    this._billing = value;
  }

  get shipping() {
    return this._shipping;
  }

  set shipping(value) {
    this._shipping = value;
  }
  
}
