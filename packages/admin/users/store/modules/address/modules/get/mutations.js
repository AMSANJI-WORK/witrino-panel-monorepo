import Vue from "vue";
import { userAddressTypes } from "../../types";
export default {
  [userAddressTypes.GET_ALL_USER_ADDRESS_ADDRESS_SUCCESS](_, payload) {},
  [userAddressTypes.GET_ALL_USER_ADDRESS_ADDRESS_FAILURE](_, error) {},
  [userAddressTypes.GET_ONE_USER_ADDRESS_ADDRESS_SUCCESS](_, payload) {},
  [userAddressTypes.GET_ONE_USER_ADDRESS_ADDRESS_FAILURE](_, error) {},
};
