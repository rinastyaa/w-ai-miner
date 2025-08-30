module.exports = {
  apps: [{
    name: 'wai-node',
    script: 'wai',
    args: 'run',
    instances: 3,  // Jumlah node bisa edit
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      W_AI_API_KEY: 'kunci-api-key'
    }
  }]
};
