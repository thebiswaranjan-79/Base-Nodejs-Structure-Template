const info = (req, res) => {
  return res.json({
    success: true,
    message: "API is LIVE",
    error: {},
    data: {},
  });
};

module.exports = {
    info,
};
