import { Box, Typography } from '@mui/material';
import React from 'react';

interface ParamProps {
  children: React.ReactNode
  optional?: boolean
}

const Param: React.FC<ParamProps> = ({
  children,
  optional,
}) => {
  return (
    <Typography
      component="span"
      sx={{
        background: '#000',
        borderRadius: 2,
        color: '#fff',
        display: 'inline-block',
        fontFamily: `'PT Mono', monospace`,
        fontSize: 14,
        lineHeight: '24px',
        px: 1.5,
      }}
    >
      {children}
      {optional ? (
        <Typography
          component="span"
          sx={{
            color: '#bdbdbd',
            display: 'inline-block',
            fontSize: 14,
            fontVariant: 'italic',
          }}
        >
          <Box
            component="span"
            sx={{ mx: 1 }}
          >
            :
          </Box>
          optional
        </Typography>
      ) : undefined}
    </Typography>
  )
}

export default Param;