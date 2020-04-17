const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./ElectroClient.js', { token: 'shit' });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched Shard ${shard.id}`));
