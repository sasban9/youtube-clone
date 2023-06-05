import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard} from './'

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  // console.log(videos)

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,idx) => (
        <Box key={idx} sx={{width:{xs:"100%", md:320}, background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvd2twrtUm1bXjzPp-7dg7WIfKZExPG-Wz_S47LsfzhMQMr7hpyWg3LpUH0vFfCgc_DY&usqp=CAU) 50% 50% no-repeat',backgroundSize:'contain'}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos