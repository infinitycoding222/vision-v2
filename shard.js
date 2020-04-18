const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./ElectroClient.js', { token: 'Njk0MjE0Nzg3MjI3NDUxNDky.XpoAXQ.PTBtmyvjZXQM1iAqMtckBkuJaC0' });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched Shard ${shard.id}`));