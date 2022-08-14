const getters = {
  userRoleId(state) {
    return state.user.roles.map((role) => role.id);
  },
  users(state) {
    return state.users;
  },
  user(state) {
    return state.user;
  },
};
export default getters;
