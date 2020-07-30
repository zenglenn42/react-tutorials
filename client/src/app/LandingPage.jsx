import React from 'react'
import { v4 as getKey } from 'uuid'
import {
    Typography,
    Button,
    Grid,
    Container,
    makeStyles,
    Divider
} from '@material-ui/core'
import { MdTouchApp } from 'react-icons/md'
import LandingImage from './LandingImage'
import LandingData from './api/LandingData'

const useStyles = makeStyles((theme) => ({
    biggestText: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(3)
        }
    },
    bigText: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        }
    },
    bodyText: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        }
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        }
    },
    buttonSize: {
        // Button attributes on smaller devices.
        // This is actually a 'medium' sized mui button.
        padding: '6px 16px',
        fontSize: '0.875rem',
        width: '100%',

        [theme.breakpoints.up('sm')]: {
            // Use this on larger devices.
            // This is a 'large' button by mui standards.
            padding: '8px 22px',
            fontSize: '0.9375rem',
            width: 'auto'
        }
    },
    divider: {
        margin: theme.spacing(2, 0)
    },
    showOnBigScreens: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'inherit'
        }
    },
    showOnSmallScreens: {
        display: 'inherit',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}))

const biggestText = 'h4'
const bigText = 'h5'
const bodyText = 'h6'

const LandingPage = ({ classes, handleDrawerOpen }) => {
    const styles = useStyles()

    return (
        <>
            <Container size="lg">
                <Typography
                    className={styles.biggestText}
                    variant={biggestText}
                >
                    {LandingData.callToActionHeader}
                </Typography>
                {LandingData.callToActionText.map((sentence) => {
                    return (
                        <Typography
                            className={styles.bodyText}
                            paragraph
                            variant={bodyText}
                            key={getKey()}
                        >
                            {sentence}
                        </Typography>
                    )
                })}

                <Button
                    className={styles.button}
                    classes={{ containedPrimary: styles.buttonSize }}
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                >
                    <MdTouchApp size="1.5em" style={{ marginRight: '1em' }} />
                    <Typography>{LandingData.getStartedText}</Typography>
                </Button>
                <Divider className={styles.divider} />

                <div className={styles.showOnSmallScreens}>
                    <Grid container direction="row" wrap="nowrap" spacing={2}>
                        {LandingData.tutorialCardImages.map((imgSrc) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={4}
                                    xl={4}
                                    key={getKey()}
                                >
                                    <LandingImage imageUrl={imgSrc} />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Divider className={styles.divider} />
                </div>

                <Typography
                    className={styles.bigText}
                    variant={bigText}
                    gutterBottom
                >
                    {LandingData.tutorialCardHeader}
                </Typography>

                <Typography
                    paragraph
                    className={styles.bodyText}
                    variant={bodyText}
                >
                    {LandingData.tutorialCardText}
                </Typography>

                <div className={styles.showOnBigScreens}>
                    <Grid container direction="row" wrap="nowrap" spacing={2}>
                        {LandingData.tutorialCardImages.map((imgSrc) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={4}
                                    xl={4}
                                    key={getKey()}
                                >
                                    <LandingImage imageUrl={imgSrc} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>

                <Divider className={styles.divider} />

                <Typography className={styles.bigText} variant={bigText}>
                    {LandingData.splashSequenceHeader}
                </Typography>

                <Typography className={styles.bodyText} variant={bodyText}>
                    {LandingData.splashSequenceText}
                </Typography>

                {LandingData.splashSequenceBullets.map((sentence) => {
                    return (
                        <Typography
                            className={styles.bodyText}
                            variant={bodyText}
                            style={{ marginLeft: '2em' }}
                            key={getKey()}
                        >
                            • {sentence}
                        </Typography>
                    )
                })}

                <Grid container direction="column" spacing={4}>
                    {LandingData.splashSequence.map((item) => {
                        return (
                            <Grid item xs={12} sm={10} key={getKey()}>
                                <Typography
                                    className={styles.bodyText}
                                    variant={bodyText}
                                >
                                    {item.text}
                                </Typography>
                                <LandingImage imageUrl={item.image} />
                            </Grid>
                        )
                    })}
                </Grid>

                <Divider className={styles.divider} />

                <Typography className={styles.bigText} variant={bigText}>
                    {LandingData.wrapupHeader}
                </Typography>

                <Typography className={styles.bodyText} variant={bodyText}>
                    {LandingData.wrapupText}
                </Typography>
                <br />
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={4} xl={4}>
                        <LandingImage imageUrl={LandingData.wrapupImage} />
                    </Grid>
                </Grid>

                <Button
                    className={styles.button}
                    classes={{ containedPrimary: styles.buttonSize }}
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                >
                    <MdTouchApp size="1.5em" style={{ marginRight: '1em' }} />
                    <Typography>{LandingData.getStartedText}</Typography>
                </Button>
            </Container>
        </>
    )
}

export default LandingPage
