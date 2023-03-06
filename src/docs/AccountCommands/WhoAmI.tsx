import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Code, { CodeDefinitions } from '../../components/Code';
import Param from '../../components/Code/Param';
import Collapsible from '../../components/Collapsible';

const WhoAmI = () => {
  return (
    <Box>
      <Typography
        component="h4"
        gutterBottom
        variant="h6"
      >
        Who am I?
      </Typography>
      <Code>
        /silvie whoami
      </Code>
      <Typography gutterBottom>
        Shares a link to your public Silvie.org profile.
      </Typography>
    </Box>
  )
}

export default WhoAmI;