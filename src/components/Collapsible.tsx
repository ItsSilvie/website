import { Box, Button, Collapse } from '@mui/material';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

interface CollapsibleProps {
  children: React.ReactNode
  text?: string
}

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  text = 'Show more info...',
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!isOpen)}
        sx={{
          mb: 1,
          p: 0,
        }}
        variant="text"
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
        <Box
          component="span"
          sx={{ ml: 1 }}
        >
          {text}
        </Box>
      </Button>
      <Collapse in={isOpen}>
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            border: '1px solid #eeeeee',
            p: 2,
          }}
        >
          {children}
        </Box>
      </Collapse>
    </>
  )
}

export default Collapsible;