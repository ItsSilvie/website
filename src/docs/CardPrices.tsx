import { Box, Divider, Link, Typography } from '@mui/material';
import React from 'react';
import Code, { CodeDefinitions, CodeParam } from '../components/Code';
import Collapsible from '../components/Collapsible';

const CardPrices = () => {
  return (
    <>
      <Typography
        component="h3"
        gutterBottom
        variant="h5"
      >
        Card prices
      </Typography>
      <Code>
        /silvie prices <CodeParam>set</CodeParam> <CodeParam>card</CodeParam>
      </Code>
      <Typography gutterBottom>
        Reveals price information about a given card in a given set using data from
        {' '}
        <Link
          href="https://tcgplayer.pxf.io/KjAXg9?u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fgrand-archive%2Fproduct"
          rel="noopener noreferrer"
        >
          TCGplayer
        </Link>
        .
      </Typography>
      <Collapsible>
        <CodeDefinitions
          data={[{
            description: 'The name of a set (prompted by the bot)',
            param: 'set',
          }, {
            description: 'The full or partial name of a card within that set',
            param: 'card',
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
          Set names are prompted by Silvie:
        </Typography>
        <Box
          component="img"
          alt="Card search prediction"
          src="https://img.silvie.org/web/card-pricing-set-prediction.png"
        />
        <Typography gutterBottom>
          Card names can be full or partial:
        </Typography>
        <Box
          component="img"
          alt="Card name partial"
          src="https://img.silvie.org/web/card-pricing-card-partial.png"
        />
        <Typography gutterBottom>
          The result is an embed with foil and non-foil market, low and mid prices:
        </Typography>
        <Box
          component="img"
          alt="Card search result"
          src="https://img.silvie.org/web/card-pricing-result.png"
        />
        <Typography>
          Pricing data is updated every 24 hours.
        </Typography>
      </Collapsible>
    </>
  )
}

export default CardPrices;