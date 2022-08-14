import {
  UPLOAD_FILE_ASYNC,
  UPLOAD_FILE_FAILURE,
  UPLOAD_FILE_SUCCESS,
  DELETE_FILE_ASYNC,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_FAILURE,
} from "./types";

import RepositoryFactory from "@witrino/repositories/factory";

const uploadRepository = RepositoryFactory.get("upload");

export default {
  async [UPLOAD_FILE_ASYNC]({ commit, state }, payload) {
    let files = [...payload];
    state.loading = true;
    try {
      let formData = new FormData();
      files.forEach((file, index) => {
        if (index === 0) formData.append("file", file);
        else formData.append(`file ${index}`, file);
      });
      const { data } = await uploadRepository.uploadFile(formData);
      commit(UPLOAD_FILE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(UPLOAD_FILE_FAILURE);
    } finally {
      files = [];
      state.loading = false;
    }
  },
  async [DELETE_FILE_ASYNC]({ commit, state }, payload) {
    state.loading = true;
    try {
      const { data } = await uploadRepository.deleteFile(payload);
      commit(DELETE_FILE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(DELETE_FILE_FAILURE);
    } finally {
      state.loading = false;
    }
  },
};
