import {
    UPDATE_INQUIRY_ASYNC,
    UPDATE_INQUIRY_SUCCESS,
    UPDATE_INQUIRY_FAILURE,
    UPDATE_STATUS_INQUIRY_ASYNC,
    UPDATE_STATUS_INQUIRY_FAILURE,
    UPDATE_STATUS_INQUIRY_SUCCESS,
} from "./types";

import RepositoryFactory from "@witrino/repositories/factory";
const guildsRepository = RepositoryFactory.get("guilds");

export default {
    async [UPDATE_INQUIRY_ASYNC]({ commit, rootState }, payload) {
        try {
            rootState.fromLoading = true;
            rootState.submitBtnLoading = true;
            delete payload.offers;
            delete payload.user_offer;
            const { data } = await guildsRepository.updateInquiry(
                payload.id,
                payload
            );
            // console.log(data);
            commit(UPDATE_INQUIRY_SUCCESS, data);
        } catch (error) {
            console.log(error);
            commit(UPDATE_INQUIRY_FAILURE, error);
        } finally {
            rootState.submitBtnLoading = false;
            rootState.fromLoading = false;
        }
    },
    async [UPDATE_STATUS_INQUIRY_ASYNC]({ commit, rootState }, payload) {
        try {
            rootState.fromLoading = true;
            rootState.submitBtnLoading = true;
            delete payload.offers;
            delete payload.user_offer;
            const { data } = await guildsRepository.updateInquiry(
                payload.id,
                payload
            );
            // console.log(data);
            commit(UPDATE_STATUS_INQUIRY_FAILURE, data);
        } catch (error) {
            console.log(error);
            commit(UPDATE_STATUS_INQUIRY_SUCCESS, error);
        } finally {
            rootState.submitBtnLoading = false;
            rootState.fromLoading = false;
        }
    },
};
