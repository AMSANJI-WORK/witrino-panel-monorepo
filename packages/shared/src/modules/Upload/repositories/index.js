import UserClient from "@witrino/repositories/clients/user";
const Source = "/upload";
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export default {
  uploadFile(file) {
    return UserClient.post(Source, file, config);
  },
  deleteFile(fileSource) {
    return UserClient.delete(`${Source}/${fileSource}`);
  },
};
