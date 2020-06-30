import React from 'react'
import { Typography, Button, Grid, Container } from '@material-ui/core'
import { MdTouchApp } from 'react-icons/md'
import LandingImage from './LandingImage'
import LandingData from './api/LandingData'

const LandingPage = ({classes, handleDrawerOpen}) => {
    return (
        <>
            <Container size="lg">
                <Typography variant="h4" gutterBottom> 
                {LandingData.callToActionHeader}
                </Typography>
                <br/>
                {LandingData.callToActionText.map((sentence) => {
                return (<Typography paragraph variant="h6">{sentence}</Typography>)
                })}
                <br/>

                <Button
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                >
                    <MdTouchApp size="1.5em" style={{marginRight: "1em"}}/> 
                    <Typography>{LandingData.getStartedText}</Typography>
                </Button>
                <br/><br/>
                <hr style={{color: "rgba(128, 128, 128, 0.2)"}} />

                <br/>
                <Typography variant="h4" gutterBottom> 
                    {LandingData.tutorialCardHeader}
                </Typography>
                <br/>
                <Typography paragraph variant="h6">
                    {LandingData.tutorialCardText}
                </Typography>

                <Grid container direction="row" wrap="nowrap" spacing={2} >
                    {LandingData.tutorialCardImages.map((imgSrc) => {
                        return (
                        <Grid item xs={12} sm={12} md={4} xl={4}>
                            <LandingImage imageUrl={imgSrc} />
                        </Grid>
                        )
                    })}
                </Grid>
                <br/>
                <hr style={{color: "rgba(128, 128, 128, 0.2)"}} />
                <br/>
                <Typography variant="h4">
                    {LandingData.splashSequenceHeader}
                </Typography>
                <br/><br/>
                <Typography variant="h6">
                    {LandingData.splashSequenceText}
                </Typography>
                <br/>
                <Typography paragraph variant="h6">
                    {LandingData.splashSequenceBullets.map((sentence) => {
                        return (
                        <Typography variant="h6" style={{marginLeft: "2em"}}>
                            • {sentence}
                        </Typography>)
                    })}
                </Typography>
                <br/>
                <Grid container direction="column" alignItems="flexStart" spacing={4}>
                    {LandingData.splashSequence.map((item) => {
                    return (
                        <>
                        <Grid item xs={12} sm={10}>
                            <Typography paragraph variant="h6">{item.text}</Typography>
                            <LandingImage imageUrl={item.image} />
                            <br/>
                        </Grid>
                        </>
                    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    })}
                </Grid>
                <br/>
                <hr style={{color: "rgba(128, 128, 128, 0.2)"}} />
                <br/>
                <Typography variant="h4">
                    {LandingData.wrapupHeader}
                </Typography>
                <br/>
                <Typography variant="h6">
                    {LandingData.wrapupText}
                </Typography>
                <br />
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={4} xl={4}>
                        <LandingImage imageUrl={LandingData.wrapupImage} />
                    </Grid>
                </Grid>
                <br/>
                <Button
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                >
                    <MdTouchApp size="1.5em" style={{marginRight: "1em"}}/> 
                    <Typography>{LandingData.getStartedText}</Typography>
                </Button>
            </Container>
        </>
    )
}

export default LandingPage