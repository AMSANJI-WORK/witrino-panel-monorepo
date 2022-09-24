import { getMutations } from "@commen/reusable-crud/get/get.module";
import { deleteMutations } from "@commen/reusable-crud/delete/delete.module";
import { createMutations } from "@commen/reusable-crud/create/create.module";
import { disableMutations } from "@commen/reusable-crud/disable/disable.module";
import { updateMutations } from "@commen/reusable-crud/update/update.module";
export default {
  ...getMutations,
  ...deleteMutations,
  ...createMutations,
  ...disableMutations,
  ...updateMutations,
};
