var userCtrl = require('../controllers/user.controller');

function userRoutes (router) {
  router.route('/v1/users/:username')
    .get(userCtrl.authMiddleware, userCtrl.getUser)
    .put(userCtrl.authMiddleware, userCtrl.editProfile)
    .delete(userCtrl.authMiddleware, userCtrl.deleteUser);
}

module.exports = userRoutes;