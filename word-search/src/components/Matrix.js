import React, { useEffect, useState } from 'react'
import { Table, TableRow, TableCell, Typography, TableBody, Button, Box } from '@mui/material';

const Matrix = (props) => {

    const [wordArray, setWordArray] = useState(['']);
    const [word, setWord] = useState('');

    const handleLetterClick = (letter, cellIndex, rowIndex) => {
        setWordArray(wordArray => [...wordArray, letter.letter])

        const tempMatrixArray = [...props.letterMatrix];
        tempMatrixArray[rowIndex][cellIndex].isSelected = true;

        props.setLetterMatrix(tempMatrixArray);
    }

    const handleResetLetters = () => {
        setWordArray([''])
        setWord('')

        const tempMatrixArray = [...props.letterMatrix];
        tempMatrixArray.map((x) => x.map(y => y.isSelected = false))
        props.setLetterMatrix(tempMatrixArray);

        const tempLegendArray = [...props.legendArray]
        tempLegendArray.map((x) => x.isFound = false)
        props.setLegendArray(tempLegendArray);
    }

    const handleFoundWord = () => {
        const filteredLegendArray = props.legendArray.filter((x) => x.legend !== word);
        const tempLegendArray = [...filteredLegendArray, { legend: word, isFound: true }];

        props.setLegendArray(tempLegendArray);

        setWordArray(['']);
        setWord('');
    }

    useEffect(() => {
        const tempLegendArray = [...props.legendArray];

        setWord(wordArray.join(""));    
        
        if (tempLegendArray.map(legendItem => legendItem.legend).includes(word)){
            handleFoundWord()
        }

    }, [word, wordArray])

    return (
        <>
            <Table sx={{ width: '20px' }}>
                <TableBody>
                    {props.letterMatrix.map((letterArray, rowIndex) => {
                        return (<TableRow key={rowIndex} sx={{ border: 'black' }}>
                            {letterArray.map((letter, cellIndex) => {
                                return (<TableCell
                                    key={`cell-${cellIndex}`}
                                    onClick={() => handleLetterClick(letter, cellIndex, rowIndex)}
                                    sx={{
                                        width: '2rem',
                                        textAlign: 'center',
                                        border: 1,
                                        borderColor: 'black',
                                        cursor: 'pointer',
                                        backgroundColor: letter.isSelected ? '#2F3F4F' : ''
                                    }}
                                >
                                    <Typography
                                        key={cellIndex}
                                        sx={{
                                            width: '2rem',
                                            cursor: 'pointer'
                                        }}>
                                        {letter.letter}
                                    </Typography>
                                </TableCell>);
                            })}
                        </TableRow>);
                    })}
                </TableBody>
            </Table>
            <Box>
                <Typography sx={{ marginTop: 5 }}>
                    currently selected letters: {word}
                </Typography>
                <Button sx={{
                    marginTop: 3,
                    border: 1,
                    color: 'black',
                    borderColor: 'black',
                    backgroundColor: 'darkSlateGray'
                }}
                    onClick={handleResetLetters}
                >
                    Reset Puzzle
                </Button>
            </Box>
        </>
    )
}

export default Matrix