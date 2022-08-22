import user from "@packages/admin/users/repositories";
import role from "@packages/admin/roles/repositories";
import theme from "@packages/admin/theme/repositories";
import service from "@packages/admin/service/repositories";
import plan from "@packages/admin/plan/repositories";
export default {
  ...role,
  ...user,
  ...plan,
  ...theme,
  ...service,
};
