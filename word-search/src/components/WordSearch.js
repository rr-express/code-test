import React, { useState } from 'react'
import Matrix from './Matrix'
import Legend from './Legend'
import { Box } from '@mui/material'

const WordSearch = () => {

    const [letterMatrix, setLetterMatrix] = useState(
        [
            [
                { letter: 'L', isSelected: false },
                { letter: 'I', isSelected: false },
                { letter: 'O', isSelected: false },
                { letter: 'N', isSelected: false },
                { letter: 'F', isSelected: false }
            ],
            [
                { letter: 'B', isSelected: false },
                { letter: 'E', isSelected: false },
                { letter: 'A', isSelected: false },
                { letter: 'R', isSelected: false },
                { letter: 'I', isSelected: false }
            ],
            [
                { letter: 'I', isSelected: false },
                { letter: 'S', isSelected: false },
                { letter: 'H', isSelected: false },
                { letter: 'T', isSelected: false },
                { letter: 'S', isSelected: false }
            ],
            [
                { letter: 'R', isSelected: false },
                { letter: 'D', isSelected: false },
                { letter: 'T', isSelected: false },
                { letter: 'A', isSelected: false },
                { letter: 'H', isSelected: false }
            ],
            [
                { letter: 'D', isSelected: false },
                { letter: 'O', isSelected: false },
                { letter: 'G', isSelected: false },
                { letter: 'C', isSelected: false },
                { letter: 'S', isSelected: false }
            ],
        ]
    );

    const [legendArray, setLegendArray] = useState(
        [
            { legend: 'LION', isFound: false },
            { legend: 'BEAR', isFound: false },
            { legend: 'FISH', isFound: false },
            { legend: 'DOG', isFound: false },
            { legend: 'CAT', isFound: false }
        ]
    )


    return (
        <Box sx={{ marginLeft: 20  }}>
            <Box sx={{ float: 'left', marginTop: 20 }}>
                <Matrix
                    setLetterMatrix={setLetterMatrix}
                    letterMatrix={letterMatrix}
                    legendArray={legendArray}
                    setLegendArray={setLegendArray} />
            </Box>
            <Box sx={{
                float: 'left',
                marginLeft: 20,
                marginTop: 20
            }}
            >
                <Legend legendArray={legendArray} />
            </Box>
        </Box>
    )
}

export default WordSearch