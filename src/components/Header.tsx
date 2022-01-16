import { Divider, Grid, Link, Typography } from "@mui/material";
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
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center',

              '@media screen and (min-width: 1921px)': {
                alignItems: 'flex-end',
                pr: 7,
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
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
                  mb: 2,
                  mt: '-12px'
                }}
              > 
                Discord Bot
              </Typography>
              <Button
                backgroundColor="#5865F2"
                backgroundColorHover="#3542EC"
                href="https://discord.com/api/oauth2/authorize?client_id=930856109189767188&amp;permissions=412317142016&amp;scope=bot%20applications.commands"
                text="Materialize"
                description="invite to your server"
                icon={faDiscord}
                lineColor="#7C85F6"
                size='large'
              />
              <Box
                sx={{
                  my: 0.5,
                  width: 182,
                }}
              >
                <Divider
                  sx={{
                    borderColor: '#4d4d4d',
                  }}
                />
              </Box>
              <Button
                backgroundColor="#5E8DE9"
                backgroundColorHover="#3C73DE"
                href="https://discord.gg/bC6uWYvM4G"
                text="Live Preview"
                description="on our test server"
                icon={faDiscord}
                lineColor="#76A1F5"
              />
              <Button
                backgroundColor="#8E4FF1"
                backgroundColorHover="#752AEA"
                href="https://github.com/ItsSilvie/bot"
                text="Source Code"
                description="share and innovate"
                icon={faGithub}
                lineColor="#A775F5"
              />
              <Typography sx={{
                color: '#767676',
                fontSize: 14,
                mt: 2,
              }}>
                Created by
                {' '}
                <Link
                  href="https://linktr.ee/pichucollector"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#767676',
                    textDecorationColor: '#616161',

                    '&:hover': {
                      textDecorationColor: '#767676',
                    }
                  }}
                >
                  PichuFan
                </Link>
                {' '}
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    fontSize: 12,
                  }}
                >
                  GA Discord:
                  {' '}
                  <Link
                    href="https://discordapp.com/users/172329123111370752"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#767676',
                      textDecorationColor: '#616161',
    
                      '&:hover': {
                        textDecorationColor: '#767676',
                      }
                    }}
                  >
                    inb4#9169
                  </Link>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{
            '@media screen and (max-width: 899px)': {
              display: 'none',
            },
          }}
        >
          <Box
            role="presentation"
            sx={{
              backgroundColor: '#36393F',
              boxSizing: 'border-box',
              display: 'flex',
              height: '100%',
            }}
          >
            <Box
              sx={{
                backgroundImage: 'url(https://img.silvie.org/web/cover.png)',
                backgroundPosition: '50% 8px',
                backgroundRepeat: 'no-repeat',
                flexGrow: 1,
                minWidth: '600px',
                maxWidth: '600px',
              }}
            />
            <Box
              sx={{
                backgroundColor: '#2F3136',
                backgroundImage: 'url(https://img.silvie.org/web/silvie-online.png)',
                backgroundPosition: '8px 8px',
                backgroundRepeat: 'no-repeat',
                flexGrow: 1,
                minWidth: 192,

                '@media screen and (max-width: 1199px)': {
                  display: 'none',
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header