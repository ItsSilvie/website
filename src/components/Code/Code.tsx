import { Box, Typography } from '@mui/material';
import React from 'react';

interface CodeProps {
  children: React.ReactNode,
  inline?: boolean
}

const Code: React.FC<CodeProps> = ({
  children,
  inline,
}) => {
  const style = {
    background: '#40444B',
    border: '1px solid #36393F',
    borderRadius: 1,
    color: '#fff',
    display: 'block',
    fontFamily: `'PT Mono', monospace`,
    fontSize: 14,
    mb: 2,
    px: 2,
    py: 1,
  } as {
    [key: string]: number | string | undefined,
  };

  if (inline) {
    style.display = 'inline';
    style.mb = undefined;
    style.px = '4px';
    style.py = '2px';
  }

  const { display, ...rest } = style;

  return (
    <Box
      sx={{
        display: display as string,
      }}
    >
      <Typography
        component="code"
        sx={{
          ...rest,
          display: 'inline-block',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default Code;