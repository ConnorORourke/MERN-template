module.exports = (app, winston) => {
  const server = app.listen(process.env.DEFAULT_HTTP_PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    winston.info(`App listening at http://${host}:${port}`);
  });
};
