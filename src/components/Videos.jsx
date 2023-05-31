import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard} from './'

const Videos = ({ videos }) => {
  // console.log(videos)

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,idx) => (
        <Box key={idx} sx={{width:{md:320, xs:"100%"}}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos