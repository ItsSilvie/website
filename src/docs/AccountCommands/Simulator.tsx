import { Box, Divider, Link, Typography } from '@mui/material';
import React from 'react';
import Code, { CodeDefinitions, CodeParam } from '../../components/Code';
import Param from '../../components/Code/Param';
import Collapsible from '../../components/Collapsible';

const Simulator = () => {
  return (
    <Box>
      <Typography
        component="h4"
        gutterBottom
        variant="h6"
      >
        Pack simulator
      </Typography>
      <Code>
        /silvie simulator <CodeParam>set</CodeParam> <CodeParam>category</CodeParam>
      </Code>
      <Typography gutterBottom>
        Runs the
        {' '}
        <Link href="https://simulator.silvie.org">
          Grand Archive Pack Simulator
        </Link>
        {' '}
        without having to leave Discord.
      </Typography>
      <Collapsible>
        <CodeDefinitions
          data={[{
            description: 'The set to simulate pack openings for.',
            param: 'set',
          }, {
            description: 'The amount of packs to open.',
            param: 'category',
          }]}
        />
        <Typography>Silvie will show a list of options to choose from for both.</Typography>
      </Collapsible>
    </Box>
  )
}

export default Simulator;