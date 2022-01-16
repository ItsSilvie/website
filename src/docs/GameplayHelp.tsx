import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Code, { CodeDefinitions, CodeParam } from '../components/Code';
import Collapsible from '../components/Collapsible';

const GameplayHelp = () => {
  return (
    <>
      <Typography
        component="h3"
        gutterBottom
        variant="h5"
      >
        Gameplay help
      </Typography>
      <Code>
        /silvie help <CodeParam>topic</CodeParam>
      </Code>
      <Typography gutterBottom>
        Quick FAQ-style help about a specific topic, such as Class Bonuses or Intercepting.
      </Typography>
      <Collapsible>
        <CodeDefinitions
          data={[{
            description: 'A topic to get help about (prompted by the bot)',
            param: 'topic',
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
          Topics are prompted by Silvie:
        </Typography>
        <Box
          component="img"
          alt="Gameplay help topic prediction"
          src="https://img.silvie.org/web/gameplay-help-topic-prediction.png"
        />
      </Collapsible>
    </>
  )
}

export default GameplayHelp;