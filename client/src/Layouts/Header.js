import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ProfileButton, LoginButton, LogoutButton } from "./UserInfoButton";


const pages = ['Create Story'];

function ResponsiveAppBar(props) {
  const isLoggedIn = props.isLoggedIn;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  return (

    <AppBar sx={{backgroundColor: "#C58940"}} position="static">
      <Container maxWidth="xl">
        <Toolbar  disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            StoryLife
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white',display: 'block' , '&:hover': {
                  backgroundColor: '#E5BA73',
                  borderColor: '#0062cc',
                  boxShadow: 'none',
                }}}
                href="/story/new"
              >
                {page}
              </Button>
            ))}
          </Box>

          {isLoggedIn ? (
            <Box sx={{ marginInline: "1rem" }}>
              <ProfileButton />
              <LogoutButton />
            </Box>
          ) : (
            <LoginButton />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;