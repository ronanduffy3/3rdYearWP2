const router = require('express').Router();
const {userRegister, userLogin, userAuth, serializeUser, checkRole} = require('../utils/Auth');

// Registration Routing

router.post("/register-user", async (req, res) => {
    await userRegister(req.body, "user", res);
  });

router.post('/register-admin', async(req, res) => {
  await userRegister(req.body, "admin", res);
});
router.post('/register-super-admin', async(req, res) => {
  await userRegister(req.body, "user", res);
});


router.get("/get", async(req, res) => {
  return res.json("Hello");
});

// Login Routing

router.post('/login-user', async(req, res) => {
  await userLogin(req.body, "user", res);
});

router.post('/login-admin', async(req, res) => {
  await userLogin(req.body, "admin", res);
});

router.post('/login-super-admin', async(req, res) => {
  await userLogin(req.body, "superadmin", res);
});

// Profile Routing
router.get("/profile", userAuth, async(req, res) => {
  console.log(serializeUser(req.user));
  return res.json("Hello");
});

router.post('/user-protected', userAuth, checkRole(['user']) ,async(req, res) => {});

router.post('/admin-protected', userAuth, checkRole(['admin']), async(req, res) => {});

router.post('/super-admin-protected', userAuth, checkRole(['superadmin']), async(req, res) => {});

module.exports = router;