require 'faye'
require 'redis'
require 'json'

faye = Faye::RackAdapter.new(mount: '/faye', timeout: 25)
Faye::WebSocket.load_adapter('thin')

run faye

Thread.new do
  client = Faye::Client.new('http://localhost:9292/faye')
  redis = Redis.new

  redis.subscribe('cinnamin') do |on|
    on.message do |channel, data, total_channels|
      data = JSON.parse(data)
      client.publish("/groups/#{data['group_id']}", "data": data)
    end
  end
end
