const errormiddleware = (err, req, res, next) => {
  console.log(err);
};

module.exports = errormiddleware;
