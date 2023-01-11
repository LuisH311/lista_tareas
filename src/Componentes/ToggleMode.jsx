import { Box, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { MdLightbulbOutline } from 'react-icons/md';
import { BsLightbulbOff } from 'react-icons/bs';
export default function ToggleMode() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box width={"95%"} justifyContent="flex-end" display={"flex"} marginTop={5}>
    <Button onClick={toggleColorMode}>
     {colorMode === 'light' ? <MdLightbulbOutline/> : <BsLightbulbOff/>}
    </Button>
  </Box>
  )
}
