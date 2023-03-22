import { typography }from '@mui/material'

export const ControlledTypography = (props) => {
    const { variant, display, isGutterBottom = false, text, style } = props

    return (
        <>
            <Typography
            variant={variant}
            display={display}
            gutterBottom={isGutterBottom}
            dtyle={style}
            >
                {text}
            </Typography>
        </>
    )
}