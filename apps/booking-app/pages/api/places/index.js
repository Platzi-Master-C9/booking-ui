import places from '../../../../../packages/places/src/utils/dataPlaces.json'

export default function handler(req, res) {
  res.status(200).json(places.data)
}

