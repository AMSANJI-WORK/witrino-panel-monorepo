import user from "@admin/modules/Users/repositories";
import role from "@admin/modules/Roles/repositories";
export default {
  ...role,
  ...user,
};
