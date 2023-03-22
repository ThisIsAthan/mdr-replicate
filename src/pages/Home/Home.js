import React, {useEffect, useState} from 'react'
import { ControlledApplicationBar, ControlledCard, ControlledTypography, ControlledCard, ControlledTextField, ControlledGrid, ControlledContainer} from '../../components'

const Home = () => {
    const [state, setState] = useState({
        firstname : '', lastname: ''
    })
    const handleChange = (event, formName) => {
        setState({...state, [formName]: event.target.value})
    }
    return (
        <>
        {console.log(state)}
        <ControlledApplicationBar title="Hello world" />
        <ControlledContainer style={{ marginTop: '100px'}}>
            <ControlledCard style={{
                marginTop: '20px'
            }}>
                <ControlledTypography
                variant="subtitle1"
                isGutterBottom={true}
                text="User Form"
                />
                <ControlledGrid
                rowSpacing={1}
                columnSpacing={{xs: 1, sm: 2, md: 3}}
                xs={6}
                sryle={{ marginTop: '10px'}}
                arrMapping={
                    [
                        {
                            children : (
                                <>
                                <ControlledTextField
                                    handleChange={(event) => handleChange(event, "firstname")}
                                    variant="subtitle1"
                                    label="Firstname"
                                    style={{
                                        marginTop: '10px',
                                        marginBotton: '10px',
                                        width: '100%'
                                    }}
                                    variantTextfield="outlined"
                                    isGutterBotom={false}
                                    />
                                </>
                            )
                        },
                        {
                             children : (
                                 <>
                                    <ControlledTextField
                                        handleChange={(e) => handleChange(e, "lastname")}
                                        variant="subtitle1"
                                        label="Latname"
                                        style={{
                                            marginTop: '10px',
                                            marginBotton: '10px',
                                            width: '100%'
                                        }}
                                        variantTextfield="outlined"
                                        isGutterBotom={false}
                                    />
                                </>
                                )
                        }        
                    ] 
                }  
                />  
            </ControlledCard>
        </ControlledContainer>
        </>
    )
}
    
export default Home