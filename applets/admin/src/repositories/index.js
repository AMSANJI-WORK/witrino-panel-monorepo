import user from "@applets/admin/modules/users/repositories";
import role from "@applets/admin/modules/roles/repositories";
import theme from "@applets/admin/modules/theme/repositories";
import service from "@applets/admin/modules/service/repositories";
import plan from "@applets/admin/modules/plan/repositories";
export default {
  ...role,
  ...user,
  ...plan,
  ...theme,
  ...service,
};
