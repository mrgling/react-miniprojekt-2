import { Box, Typography } from "@material-ui/core";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';

export function Footer() {
  return (
    <Box pt={2} pb={2}>
      <div style={centerStyle}>
        <Link style={linkStyle} to="/crud">
          <SettingsIcon />
        </Link>
      </div>
      <Typography variant="subtitle2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link style={linkStyle} to="/">
          {' Marsvinstema '}
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'gray'
}

const centerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}