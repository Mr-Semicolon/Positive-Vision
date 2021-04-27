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
      id, name, email, accountType, isActiveAccount, iat, exp,
    } = decoded;
    res.header('x-auth-token-creation', iat);
    res.header('x-auth-token-expiry', exp);
    res.locals.id = String(id);
    res.locals.email = email;
    res.locals.name = name;
    res.locals.accountType = accountType;
    res.locals.isActiveAccount = isActiveAccount;
    return next();
  });
  return false;
}

module.exports = {
  isAuthorized,
};
