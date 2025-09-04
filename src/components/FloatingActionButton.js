import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function FloatingActionButtonSize() {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                zIndex: 1000,
            }}
        >
            <Fab size="medium" color="secondary" aria-label="add">
                r
            </Fab>
        </Box>
    );
}
