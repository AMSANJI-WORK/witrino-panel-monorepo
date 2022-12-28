import { getMutations } from "@applets/commen/reusable-crud/get/get.module";
import { deleteMutations } from "@applets/commen/reusable-crud/delete/delete.module";
import { createMutations } from "@applets/commen/reusable-crud/create/create.module";
import { disableMutations } from "@applets/commen/reusable-crud/disable/disable.module";
import { updateMutations } from "@applets/commen/reusable-crud/update/update.module";
export default {
  ...getMutations,
  ...deleteMutations,
  ...createMutations,
  ...disableMutations,
  ...updateMutations,
};
