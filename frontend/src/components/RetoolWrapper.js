import React, { useEffect, useState } from 'react'
import { Button, Container } from '@mui/material'
import Retool from 'react-retool'

const RetoolWrapper = ({
  retoolAppName = "",
  accessToken = "",
  showBorder = ""
}) => { 

  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState([])

 

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ retoolAppName, accessToken })
    };
    fetch('/api/embedUrl', options)
    .then(res => res.json())
    .then(data => { setRetoolEmbedUrl(data.embedUrl)})
  }, [retoolAppName])

  return (
    // <Box sx={{ border: '3px dashed grey', borderTop:  '3px dashed grey', width: 1 }} >
    <Container maxWidth={false} disableGutters style={{ marginTop: 66, border:  showBorder ? '5px dashed #FFD4D2' : 'none'}}>
        <Retool url={`${retoolEmbedUrl}`} />
     

    </Container>
    // </Box>
  )
}

export default RetoolWrapper