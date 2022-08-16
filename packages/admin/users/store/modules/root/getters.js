const getters = {
  userRoleId(state) {
    return state.user.roles.map((role) => role.id);
  },
  userList(state) {
    return state.userList;
  },
  user(state) {
    return state.user;
  },
};
export default getters;
