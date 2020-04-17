const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./ElectroClient.js', { token: 'Njk0MjE0Nzg3MjI3NDUxNDky.XoXpNg.4BmHQkJ7RytMsfzL3R0pmvSJWww' });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched Shard ${shard.id}`));