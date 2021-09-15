import { useEffect, useState } from 'react'
import useGeolocation from 'react-navigator-geolocation'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import api from 'axios'

import { Button } from '../styles'

export default function Location() {
  const [isClicked, setIsClicked] = useState(false)
  const [place, setPlace] = useState('Loading place...')

  const { isEnabled, coords, suppressRequest } = useGeolocation({
    suppressOnMount: true,
  })

  useEffect(() => {
    async function loadWhenReady() {
      if (coords?.latitude && coords?.longitude) {
        const response = await api.get(
          `https://www.mapquestapi.com/geocoding/v1/reverse?key=${
            process.env.REACT_APP_API_KEY_GEOLOCATION || ''
          }&location=${coords.latitude}%2C${
            coords.longitude
          }&outFormat=json&thumbMaps=false`
        )

        setPlace(`
          ${response.data.results[0].locations[0].adminArea3}, ${response.data.results[0].locations[0].adminArea5}
        `)
      }
    }

    loadWhenReady()
  }, [coords])

  function handleGetLocation() {
    if (!isClicked) setIsClicked(true)

    suppressRequest(false)
  }

  return (
    <Button color="grey" onClick={handleGetLocation}>
      <HiOutlineLocationMarker size={24} />
      {!isClicked
        ? 'Select my location'
        : !isEnabled
        ? 'Location permission denied'
        : place}
    </Button>
  )
}
