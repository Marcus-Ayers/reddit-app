const { environment } = require('@rails/webpacker')

const path = require('path')

const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@utils': path.resolve(__dirname, '/Users/marcus/Documents/web-dev/Altcademy/reddit-app/app/javascript/src/utils'),
      
    }
  }
}

environment.config.merge(customConfig);

module.exports = environment