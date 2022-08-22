import user from "@packages/admin/users/repositories";
import role from "@packages/admin/roles/repositories";
import theme from "@packages/admin/theme/repositories";
import service from "@packages/admin/service/repositories";
export default {
  ...role,
  ...user,
  ...theme,
  ...service,
};
