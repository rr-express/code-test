import { Box, Typography } from '@mui/material';
import React from 'react'

const Legend = (props) => {
    const legendArray = [...props.legendArray];

    return (
        <Box>
            <Typography> Find the following words:</Typography>
            {legendArray.map((x, index) => {
                return (<Box
                    sx={{
                        textDecoration: !x.isFound ? "" : "line-through"
                    }}
                    key={index}
                >
                    {x.legend}
                </Box>)
            })}
        </Box>
    )
}

export default Legend