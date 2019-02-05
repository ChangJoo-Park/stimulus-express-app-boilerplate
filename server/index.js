const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack.config')
const viewEngine = require('ejs-mate')
const app = express()
const port = 9000
const publicPath = path.join(__dirname, '../', 'public')
const viewPath = path.join(__dirname, '../client/', 'views')

module.exports = function() {
  app.set('views', viewPath)
  app.engine('ejs', viewEngine)
  app.set('view engine', 'ejs')

  app.use(express.static(publicPath))
  app.use(webpackMiddleware(webpack(webpackConfig)))

  const pages = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/hello',
      title: 'Hello'
    },
    {
      path: '/clipboard',
      title: 'Clipboard'
    },
    {
      path: '/slideshow',
      title: 'Slideshow'
    },
    {
      path: '/content-loader',
      title: 'Content Loader'
    }
  ]

  app.get('/', (req, res) => {
    res.render('index.ejs', {
      pages,
      currentPage: {
        path: '/',
        title: 'Home'
      }
    })
  })

  app.get('/uptime', (req, res, next) => {
    res.send(process.uptime().toString())
  })

  app.get('/:page', (req, res, next) => {
    const currentPage = pages.find(page => page.path === req.path)
    res.render(req.params.page, {
      pages,
      currentPage
    })
  })

  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`)
  })
}
