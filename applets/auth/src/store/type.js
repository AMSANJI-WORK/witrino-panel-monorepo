import * as loginTypes from "./modules/login/types";
import * as logoutTypes from "./modules/logout/types";
import * as otpTypes from "./modules/otp/types";
import * as registerTypes from "./modules/register/types";
import * as setPassTypes from "./modules/setpass/types";
import * as forgetPassTypes from "./modules/forgetpass/types";

const REMOVE_AUTHORIZE_DATA = "REMOVE_AUTHORIZE_DATA";
const SET_AUTHORIZE_DATA = "SET_AUTHORIZE_DATA";

export const authTypes = {
  REMOVE_AUTHORIZE_DATA,
  SET_AUTHORIZE_DATA,
  ...loginTypes,
  ...logoutTypes,
  ...otpTypes,
  ...registerTypes,
  ...setPassTypes,
  ...forgetPassTypes,
};
