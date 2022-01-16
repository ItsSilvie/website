import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Code, { CodeDefinitions, CodeParam } from '../components/Code';
import Param from '../components/Code/Param';
import Collapsible from '../components/Collapsible';

const RandomCard = () => {
  return (
    <>
      <Typography
        component="h3"
        gutterBottom
        variant="h5"
      >
        Random card
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
        <Box
          sx={{
            my: 1,
            py: 1,
          }}
        >
          <Divider />
        </Box>
        <Typography gutterBottom>
          Silvie will pick a random set to return a random card from:
        </Typography>
        <Box
          component="img"
          alt="Random card result"
          src="https://img.silvie.org/web/random-card.png"
        />
        <Typography gutterBottom>
          If a <Param>set</Param> is specified, Silvie will show a list of available sets to choose from:
        </Typography>
        <Box
          component="img"
          alt="Random card result"
          src="https://img.silvie.org/web/random-card-prediction.png"
        />
      </Collapsible>
    </>
  )
}

export default RandomCard;