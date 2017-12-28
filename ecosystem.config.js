module.exports = {
  apps: [{
    name: 'nyanlife',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-54-242-50-83.compute-1.amazonaws.com',
      key: '~/.ssh/nyanlife.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Jebbie87/test-app.git',
      path: '/home/ec2-user/test-app',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}