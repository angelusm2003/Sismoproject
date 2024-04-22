class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :magnitude, :place, :time, :tsunami, :mag_type, :title, :coordinates

  def coordinates
    { longitude: object.longitude, latitude: object.latitude }
  end
end