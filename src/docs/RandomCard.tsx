import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Code, { CodeDefinitions, CodeParam } from '../components/Code';
import Collapsible from '../components/Collapsible';

const RandomCard = () => {
  return (
    <>
      <Typography
        component="h3"
        gutterBottom
        variant="h5"
      >
        Random RandomCard
      </Typography>
      <Code>
        /silvie random <CodeParam optional>set</CodeParam>
      </Code>
      <Typography gutterBottom>
        Reveals a card chosen at random from a set chosen at random (unless otherwise specified).
      </Typography>
      <Collapsible>
        <CodeDefinitions
          data={[{
            description: 'Only include cards from a specific set.',
            optional: true,
            param: 'set',
          }]}
        />
        {/* <Box
          sx={{
            my: 1,
            py: 1,
          }}
        >
          <Divider />
        </Box>
        <Typography gutterBottom>
          Topics are prompted by Silvie:
        </Typography>
        <Box
          component="img"
          alt="Gameplay help topic prediction"
          src="https://img.silvie.org/web/gameplay-help-topic-prediction.png"
        /> */}
      </Collapsible>
    </>
  )
}

export default RandomCard;