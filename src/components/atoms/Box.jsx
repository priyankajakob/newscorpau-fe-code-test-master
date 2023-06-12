import Box from '@mui/material/Box'

const MuiBox = ({ id, children, ...rest}) => {
    return(
    <Box id={id} {...rest}>
        {children}
    </Box>)
}

export default MuiBox;