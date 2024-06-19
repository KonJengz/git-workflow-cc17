const errormiddleware = (err, req, res, next) => {
  res.status(500), json({ mes: err.message });
  console.log(err);
};

module.exports = errormiddleware;
