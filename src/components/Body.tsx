import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Article from './Article';
import AccountCommands from '../docs/AccountCommands';
import CardSearch from '../docs/CardSearch';
import RandomCard from '../docs/RandomCard';

const Body = () => {
  return (
    <Box component="section">
      <Article>
        <Typography>
          Silvie is a fan-made open source Grand Archive Discord bot which provides a range of useful chat commands.
        </Typography>
      </Article>
      <Article>
        <Typography component="h2" variant="h5">
          What is Grand Archive?
        </Typography>
        <Typography>
          Grand Archive is a recently funded trading card game.
        </Typography>
        <Typography>
          Check out their
          {' '}
          <Link
            href="https://grandarchivetcg.com"
            rel="noopener noreferrer"
          >
            website
          </Link>
          {' '}
          and
          {' '}
          <Link
            href="https://discord.gg/nbgDk6UrFp"
            rel="noopener noreferrer"
          >
            Discord server
          </Link>
          {' '}
          if you want to get involved.
        </Typography>
      </Article>
      <Article title="Features">
        <Box
          sx={{
            borderLeft: '2px solid #5865F2',
            mb: 2,
            pl: 2,
          }}
        >
          <CardSearch />
        </Box>
        <Box
          sx={{
            borderLeft: '2px solid #5865F2',
            mb: 2,
            pl: 2,
          }}
        >
          <RandomCard />
        </Box>
        <Box
          sx={{
            borderLeft: '2px solid #5865F2',
            pl: 2,
          }}
        >
          <AccountCommands />
        </Box>
      </Article>
      <Article title="Get Silvie">
        <Typography>
          Simply click on the <strong>Materialize</strong> button in the header to be prompted to invite Silvie to a Discord server you have control of.
        </Typography>
        <Typography>
          If you want to try Silvie before adding it to your server, the <strong>Live Preview</strong> button in the header will invite you to the Silvie Bot Discord server where Silvie will be online.
        </Typography>
      </Article>
      <Article title="Contribute">
        <Typography>
          Silvie is completely open source on GitHub. It&#39;s built in Node.js with TypeScript on top of
          {' '}
          <Link
            href="https://discord.js.org"
            rel="noopener noreferrer"
          >
            discord.js
          </Link>
          .
        </Typography>
        <Typography>
          Click on the <strong>Source Code</strong> button in the header to be taken to the relevant repo. This is also where you can report bugs if Silvie starts misbehaving.
        </Typography>
        <Box
          component="img"
          alt="Silvie build status"
          src="https://img.shields.io/github/deployments/ItsSilvie/bot/silvie?label=Build&amp;logo=heroku&amp;style=for-the-badge"
          sx={{ mt: 2 }}
        />
      </Article>
    </Box>
  );
}

export default Body;