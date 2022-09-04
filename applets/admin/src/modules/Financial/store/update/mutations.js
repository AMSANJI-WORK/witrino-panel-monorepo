import {
    UPDATE_INQUIRY_SUCCESS,
    UPDATE_INQUIRY_FAILURE,
    UPDATE_STATUS_INQUIRY_SUCCESS,
    UPDATE_STATUS_INQUIRY_FAILURE,
} from "./types";
import Vue from "vue";
export default {
    [UPDATE_INQUIRY_SUCCESS](state, payload) {
        const targetIndex = state.inquiryList.findIndex(
            (inquiry) => inquiry.id === payload.id
        );
        if (!targetIndex)
            Vue.$toast.open({
                message: "مورد یافت نشد",
                type: "error",
            });
        state.inquiryList[targetIndex] = Object.assign({}, payload);
        Vue.$toast.open({
            message: "ویرایش استعلام با موفقیت انجام شد",
            type: "success",
        });
    },
    [UPDATE_INQUIRY_FAILURE](_, error) {
        Vue.$toast.open({
            message: "ویرایش استعلام با خطا مواجه شد",
            type: "error",
        });
        console.log(error);
    },
    [UPDATE_STATUS_INQUIRY_SUCCESS](state, payload) {
        const targetIndex = state.inquiryList.findIndex(
            (inquiry) => inquiry.id === payload.id
        );
        if (!targetIndex)
            Vue.$toast.open({
                message: "مورد یافت نشد",
                type: "error",
            });
        state.inquiryList[targetIndex] = Object.assign({}, payload);
        Vue.$toast.open({
            message: "ویرایش استعلام با موفقیت انجام شد",
            type: "success",
        });
    },
    [UPDATE_STATUS_INQUIRY_FAILURE](_, error) {
        Vue.$toast.open({
            message: "ویرایش استعلام با خطا مواجه شد",
            type: "error",
        });
        console.log(error);
    },
};
