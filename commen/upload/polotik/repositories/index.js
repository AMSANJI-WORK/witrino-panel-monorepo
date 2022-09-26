import UserClient from "@polotik/repositories/clients/user";
const Source = "/upload";
const CONFIG = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export default {
  uploadFile(file) {
    return UserClient.post(Source, file, CONFIG);
  },
  deleteFile(fileSrc) {
    return UserClient.delete(fileSrc);
  },
};
