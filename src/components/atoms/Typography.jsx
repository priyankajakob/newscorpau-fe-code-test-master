import Typography from '@mui/material/Typography'

const MuiTypography = ({ variant, children, ...rest }) => {
    return(
    <Typography variant = {variant} {...rest}>
        {children}
    </Typography>)
}

export default MuiTypography;