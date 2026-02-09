import React from 'react'
import { Avatar, Box } from "@mui/material";

const StoryAvatar = ({img, title}) => {
  return (
    <div className='flex flex-col items-center'>
      <Box
        sx={{
          p: "3px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #feda75, #d62976, #962fbf)",
        }}
      >
        <Avatar
          src={img}
          sx={{ width: 64, height: 64, border: "2px solid black" }}
        />

      </Box>
      <p>{title}</p>
    </div>
  )
}

export default StoryAvatar