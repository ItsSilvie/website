import { Box, Typography } from '@mui/material';
import React from 'react';

interface ArticleProps {
  children: React.ReactNode
  title?: string | React.ReactNode
}

const Article: React.FC<ArticleProps> = ({
  children,
  title,
}) => {
  return (
    <Box
      component="article"
      sx={{ mb: 2 }}
    >
      {title ? (
        <Typography
          component="h2"
          gutterBottom
          variant="h4"
        >
          {title}
        </Typography>
      ) : undefined}
      {children}
    </Box>
  )
}

export default Article;