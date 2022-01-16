import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Code, { CodeDefinitions, CodeParam } from '../components/Code';
import Collapsible from '../components/Collapsible';

const CardSearch = () => {
  return (
    <>
      <Typography
        component="h3"
        gutterBottom
        variant="h5"
      >
        Card search
      </Typography>
      <Code>
        /silvie search <CodeParam>set</CodeParam> <CodeParam>card</CodeParam>
      </Code>
      <Typography gutterBottom>
        Reveals information about a given card in a given set.
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
          src="https://img.silvie.org/web/card-search-set-prediction.png"
        />
        <Typography gutterBottom>
          Card names can be full or partial:
        </Typography>
        <Box
          component="img"
          alt="Card name partial"
          src="https://img.silvie.org/web/card-search-card-partial.png"
        />
        <Typography gutterBottom>
          The result is an embed with the full card text and attributes, along with an expandable image of the card (if present):
        </Typography>
        <Box
          component="img"
          alt="Card search result"
          src="https://img.silvie.org/web/card-search-result.png"
        />
        <Typography gutterBottom>
          Clicking on a thumbnail reveals the full card image:
        </Typography>
        <Box
          component="img"
          alt="Card search images"
          src="https://img.silvie.org/web/card-search-image.png"
        />
      </Collapsible>
    </>
  )
}

export default CardSearch;