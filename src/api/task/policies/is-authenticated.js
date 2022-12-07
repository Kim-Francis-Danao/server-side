module.exports = async (policyContext, config, { strapi }) => {
    if (policyContext.state.user.role.name === 'Authenticated') {
      // Go to next policy or will reach the controller's action.
      return true;
    }
  
    return false;
  };
  