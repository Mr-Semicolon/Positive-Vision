const jwt = require('jsonwebtoken');

function isAuthorized(req, res, next) {
  const token = req.get('x-auth-token');
  if (!token) {
    next({ message: 'I don\'t know you, who are you?!', status: 403 });
    return false;
  }
  jwt.verify(token, process.env.APP_SECRET, async (err, decoded) => {
    if (err) {
      return next({ message: err.message, status: 403 });
    }
    const {
      id, username, mobile, accountType, isActiveAccount, email, iat, exp,
    } = decoded;
    if (!mobile) {
      return next({ message: 'invalid token', status: 403 });
    }
    res.header('x-auth-token-creation', iat);
    res.header('x-auth-token-expiry', exp);
    res.locals.rootUserId = String(id);
res.locals.email = email;
    res.locals.username = username;
    res.locals.mobile = mobile;
    res.locals.accountType = accountType;
    res.locals.isActiveAccount = isActiveAccount;
    return next();
  });
  return false;
}

module.exports = {
  isAuthorized,
};
