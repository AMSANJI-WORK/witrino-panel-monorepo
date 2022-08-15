import user from "@packages/admin/users/repositories";
import role from "@packages/admin/roles/repositories";
export default {
  ...role,
  ...user,
};
