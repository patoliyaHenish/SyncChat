import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import React, { memo, useState } from 'react';
import { matBlack } from '../constants/color';
import { useNavigate } from 'react-router-dom';
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from '../components/shared/AvatarCard';
import {sampleChats} from '../constants/sampleData';

const Groups = () => {
  const chatId = "asdsd";
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const IconBtns = <>
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "none",
          position: "fixed",
          top: "1rem",
          right: "1rem",
        }
      }}>
      <IconButton onClick={handleMobile}>
        <MenuIcon />
      </IconButton>
    </Box>
    <Tooltip title="back">
      <IconButton
        sx={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          bgcolor: matBlack,
          color: "white",
          ":hover": {
            bgcolor: "rgba(0,0,0,0.7)",
          }
        }}
        onClick={navigateBack}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>
  return <Grid container height={"100vh"}>
    <Grid
      item
      sx={{
        display: {
          xs: "none",
          sm: "block",
        }
      }}
      sm={4}
      bgcolor={"bisque"}
    >
      <GroupList myGroups={sampleChats} chatId={chatId}/>
    </Grid>
    <Grid item xs={12} sm={8} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      padding: "1rem 3rem"
    }}>
      {IconBtns}
    </Grid>

    <Drawer sx={{
      display: {
        xs: "block",
        sm: "none",
      }
    }} open={isMobileMenuOpen} onClose={handleMobileClose}>
      <GroupList w={"50vw"} />
    </Drawer>
  </Grid>
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack>
    {
      myGroups.length > 0 ? (
        myGroups.map((group) => <GroupListItem group={group} chatId={chatId} key={group._id} />)
      ) : (
        <Typography textAlign={"center"} padding="1rem">
          No groups
        </Typography>
      )
    }
  </Stack>
);

const GroupListItem = memo(
  ({ group, chatId }) => {
    const {
      name,
      avatar,
      _id,
    } = group;

    return (
    <Link to={`?group=${_id}`} onClick={e=>{
      if(chatId===_id) e.preventDefault();
    }}>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        alignItems={"center"}
      >
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
    )
  }
)

export default Groups;
