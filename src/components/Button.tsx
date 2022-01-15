import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button as MUIButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface ButtonProps {
    backgroundColor: string,
    text: string,
    description: string,
    icon: IconDefinition,
    lineColor: string,
    size?: 'large' | 'regular',
}

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    text,
    description,
    icon,
    lineColor,
    size = 'regular',
}) => {
    const sizes = {
        width: 216,
        textFontSize: 20,
        descriptionFontSize: 11,
        iconPadding: '9px',
    }
    if (size === 'large') {
        sizes.width = 232;
        sizes.textFontSize = 24;
        sizes.descriptionFontSize = 12;
        sizes.iconPadding = '13px';
    }
    return (
        <MUIButton
            variant='contained'
            sx={{
                backgroundColor,
                display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                borderRadius: 1.5,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                mt: '32px',
                p: '1px',
                width: sizes.width,
            }}
        >
            <Box
                sx={{
                    py: 1,
                    textAlign: 'right',
                }}
            >
                <Typography
                    sx={{
                        fontSize: sizes.textFontSize,
                        lineHeight: '110%',
                        textTransform: 'none',
                    }}
                >
                    {text}
                </Typography>

                <Typography
                    sx={{
                        fontSize: sizes.descriptionFontSize,
                        lineHeight: '110%',
                        textTransform: 'none',
                    }}
                >
                    {description}
                </Typography>
            </Box>

            <Box
                sx={{
                    borderLeft: `1px solid ${lineColor}`,
                    fontSize: 26,
                    ml: '13px',
                    px: sizes.iconPadding,
                    textAlign: 'center',
                    width: 32,
                }}
            >
                <FontAwesomeIcon
                    icon={icon}
                />
            </Box>
        </MUIButton>
    )
}

export default Button