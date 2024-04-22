class Api::FeaturesController < ApplicationController
  def index
    features = Feature.all

    # Filtrar por mag_type
    if params[:filters].present? && params[:filters][:mag_type].present?
      mag_types = params[:filters][:mag_type].split(',')
      features = features.where(mag_type: mag_types)
    end

    # Paginación
    per_page = params[:per_page].present? ? params[:per_page].to_i : 10
    page = params[:page].present? ? params[:page].to_i : 1
    features = features.page(page).per(per_page)

    total = features.count
    #features = features.offset((page - 1) * per_page).limit(per_page)

    # Formatear el response
    data = features.map do |feature|
      {
        id: feature.id,
        type: "feature",
        attributes: {
          external_id: feature.external_id,
          magnitude: feature.magnitude,
          place: feature.place,
          time: feature.time.to_s,
          tsunami: feature.tsunami,
          mag_type: feature.mag_type,
          title: feature.title,
          coordinates: {
            longitude: feature.longitude,
            latitude: feature.latitude
          }
        },
        links: {
          external_url: feature.url
        }
      }
    end

    render json: {
      data: data,
      pagination: {
        current_page: page,
        total: total,
        per_page: per_page
      }
    }
  end
end
