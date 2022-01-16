import { Box, Typography } from '@mui/material';
import React from 'react';
import Param from './Param';

interface Definition {
  description: string
  optional?: boolean
  param: string
}

interface DefinitionsProps {
  data: Definition[]
}

const Definitions: React.FC<DefinitionsProps> = ({
  data,
}) => {
  return (
    <Box sx={{ mb: 1 }}>
      <Typography
        gutterBottom
        variant="body2"
      >
        Parameters:
      </Typography>
      <Box
        component="ul"
        sx={{ m: 0 }}
      >
        {data.map(({ description, optional, param }) => (
          <Box
            component="li"
            key={param}
          >
            <Typography>
              <Param optional={optional}>{param}</Param>
              {' - '}
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Definitions;