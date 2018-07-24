// Home route
const routes = (app) => {
  app.get('/', (req, res) => {
    res.redirect('/api/v1');
  });
  app.get('/api/v1', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Winkleaf API',
    });
  });
};

export default routes;
