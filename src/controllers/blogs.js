exports.create = (req, res, next) => {
  res.json({
    message: "Create product success",
    data: {
      id: 1,
      name: "Sarimi Goreng Ayam",
      price: 2500,
    },
  });
  next();
};

exports.getAll = (req, res, next) => {
  res.json({
    message: "Get all product success",
    data: [
      {
        id: 1,
        name: "Sarimi Goreng Ayam",
        price: 2500,
      },
    ],
  });
  next();
};
