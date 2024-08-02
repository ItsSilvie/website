import { Box, Link, Typography } from '@mui/material';
import Simulator from './Simulator';
import WhoAmI from './WhoAmI';

const AccountCommands = () => {
  return (
    <>
      <Typography
        component="h3"
        gutterBottom
        id="account-commands"
        variant="h5"
      >
        Account commands
      </Typography>
      <Typography>
        If you&#39;ve linked your Discord account to your Silvie.org account (
        <Link href="https://portal.silvie.org/account">
            here
        </Link>
        ), you can also make use of the following commands:
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 2,
        rowGap: 1,
      }}>
        <WhoAmI />
        <Simulator />
      </Box>
    </>
  )
}

export default AccountCommands;