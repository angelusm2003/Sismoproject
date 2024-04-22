
namespace :fetch do
  desc "Fetch and persist sismic data from USGS"
  task sismic_data: :environment do
    require 'net/http'
    require 'json'

    url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    data = JSON.parse(response)

    data['features'].each do |feature|
      next if Feature.exists?(external_id: feature['id'])

      properties = feature['properties']
      coordinates = feature['geometry']['coordinates']

      next if properties['title'].nil? || properties['url'].nil? || properties['place'].nil? || properties['magType'].nil? || coordinates[0].nil? || coordinates[1].nil?

      magnitude = properties['mag']
      longitude = coordinates[0]
      latitude = coordinates[1]

      next unless magnitude.between?(-1.0, 10.0) && latitude.between?(-90.0, 90.0) && longitude.between?(-180.0, 180.0)

      Feature.create(
        external_id: feature['id'],
        magnitude: magnitude,
        place: properties['place'],
        time: properties['time'],
        url: properties['url'],
        tsunami: properties['tsunami'],
        mag_type: properties['magType'],
        title: properties['title'],
        longitude: longitude,
        latitude: latitude
      )
    end
  end
end
