import { Grid, Typography } from "@mui/material";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Box } from "@mui/system";
import React from "react";
import Button from './Button';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#444444',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        height: 420,
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          height: '100%',
        }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              boxSizing: 'border-box',
              display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              height: '100%',
              py: 7,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#FFF',
                fontFamily: `'Ruluko', sans-serif`,
                fontSize: 72,
                lineHeight: '82px',
              }}    
            >
              Silvie
              <Typography
                component="span"
                variant="h1"
                sx={{
                  color: '#E1E1E1',
                  fontFamily: `'Ruluko', sans-serif`,
                  fontSize: 72,
                  lineHeight: '82px',
                }}
              >
                ,
              </Typography>
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#E1E1E1',
                fontFamily: `'Ruluko', sans-serif`,
                fontSize: 28,
                lineHeight: '32px',
                mt: '-12px'
              }}
            > 
              Discord Bot
            </Typography>
            <Button
              backgroundColor="#5865F2"
              backgroundColorHover="#3542EC"
              text="Materialize"
              description="invite to your server"
              icon={faDiscord}
              lineColor="#7C85F6"
              size='large'
            />
            <Button
              backgroundColor="#5E8DE9"
              backgroundColorHover="#3C73DE"
              text="Live Preview"
              description="on our test server"
              icon={faDiscord}
              lineColor="#76A1F5"
            />
            <Button
              backgroundColor="#8E4FF1"
              backgroundColorHover="#752AEA"
              text="Source Code"
              description="share and innovate"
              icon={faGithub}
              lineColor="#A775F5"
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          Bar
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header