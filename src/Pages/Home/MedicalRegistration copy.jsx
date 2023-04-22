import React from "react";
// import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid, Box, Card, CardActions, CardContent, Button, Typography, FormControl, InputAdornment, InputLabel, MenuItem, Paper, Select, TextField, Tabs, Tab, styled } from '@mui/material';

import PropTypes from 'prop-types';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const steps = ['Patient Information', 'Additional Information', 'Address Details'];

function Item({ children }) {
    return (
        <div style={{ border: '1px dashed #fff', padding: 2 }}> {children} </div>
    );
}

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 5;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    /////////////////
    const [patTitle, setPatTitle] = React.useState('');
    const [patGender, setPatGender] = React.useState('');
    const [patMaritalStatus, setPatMaritalStatus] = React.useState('');
    const [patAge, setPatAge] = React.useState(undefined);
    const [patNationality, setPatNationality] = React.useState('');
    const [patReligion, setPatReligion] = React.useState('');
    const [patMotherTongue, setPatMotherTongue] = React.useState('');
    const [patOccupation, setPatOccupation] = React.useState('');
    const [patCommunity, setPatCommunity] = React.useState('');
    const [patBloodGroup, setPatBloodGroup] = React.useState('');
    const [patGuardian, setPatGuardian] = React.useState('');
    const [emergencyContactPerson, setEmergencyContactPerson] = React.useState('');

    const DatePickerStyle = {
        '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': { height: 10 },
        '.css-1kxfkib-MuiFormLabel-root-MuiInputLabel-root': { top: '-5px' }
    }

    const patTitleHandleChange = (event) => {
        setPatTitle(event.target.value);
    };

    const patGenderHandleChange = (event) => {
        setPatGender(event.target.value);
    };

    const patMaritalStatusHandleChange = (event) => {
        setPatMaritalStatus(event.target.value);
    };

    const patNationalityHandleChange = (event) => {
        setPatNationality(event.target.value);
    };

    const patReligionHandleChange = (event) => {
        setPatReligion(event.target.value);
    };

    const patMotherTongueHandleChange = (event) => {
        setPatMotherTongue(event.target.value);
    };

    const patOccupationHandleChange = (event) => {
        setPatOccupation(event.target.value);
    };

    const patCommunityHandleChange = (event) => {
        setPatCommunity(event.target.value);
    };

    const patBloodGroupHandleChange = (event) => {
        setPatBloodGroup(event.target.value);
    };

    const patGuardianHandleChange = (event) => {
        setPatGuardian(event.target.value);
    };

    const emergencyContactPersonHandleChange = (event) => {
        setEmergencyContactPerson(event.target.value);
    };
    /////////////////

    return (
        <Card sx={{ minWidth: 275, marginBottom: '100px' }}>
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = (
                                    <Typography variant="caption">Optional</Typography>
                                );
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {
                        activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button variant="contained" onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        )
                            // ======================== Form One ======================
                            : activeStep === 0 ?
                                (<React.Fragment>
                                    {/* -------------------------------- Patient Info ----------------------- */}
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Box sx={{ flexGrow: 1 }}>
                                                {/* Tab 1 */}
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                disabled
                                                                id="outlined-required"
                                                                label="MR Number"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                disabled
                                                                id="outlined-required"
                                                                label="Registration Date"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                disabled
                                                                id="outlined-required"
                                                                label="Status"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} md={1}>
                                                        <Item>
                                                            <Typography mt={0}>Patient Name</Typography>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Item>
                                                            <FormControl fullWidth size="small">
                                                                <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={patTitle}
                                                                    label="Title"
                                                                    onChange={patTitleHandleChange}
                                                                >
                                                                    <MenuItem value={10}>MR</MenuItem>
                                                                    <MenuItem value={20}>MRS</MenuItem>
                                                                    <MenuItem value={30}>MS</MenuItem>
                                                                    <MenuItem value={40}>PROF</MenuItem>
                                                                    <MenuItem value={40}>REV</MenuItem>
                                                                    <MenuItem value={40}>S/O</MenuItem>
                                                                    <MenuItem value={40}>SR</MenuItem>
                                                                    <MenuItem value={40}>W/O</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="outlined-required"
                                                                label="First&nbsp;Name"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="outlined-required"
                                                                label="Middle&nbsp;Name"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="outlined-required"
                                                                label="Last&nbsp;Name"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Item>
                                                            <FormControl fullWidth size="small">
                                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={patGender}
                                                                    label="Gender"
                                                                    onChange={patGenderHandleChange}
                                                                >
                                                                    <MenuItem value="M">Male</MenuItem>
                                                                    <MenuItem value="F">Female</MenuItem>
                                                                    <MenuItem value="O">Others</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Item>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={1}>

                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DatePicker label="Date of Birth" format="MM-DD-YYYY"
                                                                    sx={DatePickerStyle}
                                                                />
                                                            </LocalizationProvider>
                                                        </Item>
                                                    </Grid>

                                                    <Grid item xs={12} md={5} mt={0}>
                                                        <Item>
                                                            <Grid container spacing={1}>
                                                                <Grid item xs={2} md={1}>
                                                                    <Typography mt={'1rem'} sx={{ width: '20px' }}>Age</Typography>
                                                                </Grid>
                                                                <Grid item xs={10} md={11}>
                                                                    <TextField
                                                                        label="Year"
                                                                        id="outlined-start-adornment"
                                                                        sx={{ m: 1, width: '14ch' }}
                                                                        InputProps={{
                                                                            startAdornment: <InputAdornment position="start">Y</InputAdornment>,
                                                                        }}
                                                                        error={!patAge}
                                                                        fullWidth
                                                                        required
                                                                        defaultValue=""
                                                                        size="small"
                                                                        type="number"
                                                                        onChange={(e) => {
                                                                            setPatAge(e.target.value)
                                                                            let age = e.target.value;
                                                                            if (age < 1 || age > 110) {
                                                                                setPatAge('')
                                                                                alert('Error !')
                                                                            }
                                                                        }}
                                                                    />
                                                                    <TextField
                                                                        label="Month"
                                                                        id="outlined-start-adornment"
                                                                        sx={{ m: 1, width: '12ch' }}
                                                                        InputProps={{
                                                                            startAdornment: <InputAdornment position="start">M</InputAdornment>,
                                                                        }}
                                                                        error={!patAge}
                                                                        fullWidth
                                                                        required
                                                                        defaultValue="0"
                                                                        size="small"
                                                                        type="number"
                                                                        onChange={(e) => {
                                                                            setPatAge(e.target.value)
                                                                            let age = e.target.value;
                                                                            if (age < 1 || age > 110) {
                                                                                setPatAge('')
                                                                                alert('Error !')
                                                                            }
                                                                        }}
                                                                    />
                                                                    <TextField
                                                                        label="Date"
                                                                        id="outlined-start-adornment"
                                                                        sx={{ m: 1, width: '12ch' }}
                                                                        InputProps={{
                                                                            startAdornment: <InputAdornment position="start">D</InputAdornment>,
                                                                        }}
                                                                        error={!patAge}
                                                                        fullWidth
                                                                        required
                                                                        defaultValue="0"
                                                                        size="small"
                                                                        type="number"
                                                                        onChange={(e) => {
                                                                            setPatAge(e.target.value)
                                                                            let age = e.target.value;
                                                                            if (age < 1 || age > 110) {
                                                                                setPatAge('')
                                                                                alert('Error !')
                                                                            }
                                                                        }}
                                                                    />
                                                                </Grid>

                                                            </Grid>
                                                        </Item>
                                                    </Grid>

                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <FormControl fullWidth size="small">
                                                                <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
                                                                <Select
                                                                    error={!patMaritalStatus}
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={patMaritalStatus}
                                                                    label="Gender"
                                                                    onChange={patMaritalStatusHandleChange}
                                                                >
                                                                    <MenuItem disabled value="">
                                                                        <em>Select</em>
                                                                    </MenuItem>
                                                                    <MenuItem value="Single">Single</MenuItem>
                                                                    <MenuItem value="Married">Married</MenuItem>
                                                                    <MenuItem value="Separated">Separated</MenuItem>
                                                                    <MenuItem value="Widowed">Widowed</MenuItem>
                                                                    <MenuItem value="Unknown">Unknown</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Item>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="contact-person-one-phone-text"
                                                                label="Phone&nbsp;Number&nbsp;"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Item>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                id="contact-person-one-phone-text"
                                                                label="Alternate&nbsp;Phone&nbsp;Number&nbsp;"
                                                                defaultValue=""
                                                                size="small"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                </Grid>

                                            </Box>
                                        </CardContent>
                                    </Card>
                                    {/* -------------------------------- End: Patient Info ----------------------- */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="primary"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                            variant="contained"
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {isStepOptional(activeStep) && (
                                            <Button color="primary" variant="contained" onClick={handleSkip} sx={{ mr: 1 }}>
                                                Skip
                                            </Button>
                                        )}

                                        <Button onClick={handleNext} variant="contained">
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                                )
                                // ======================== Form Two ======================
                                : activeStep === 1 ?
                                    (<React.Fragment>
                                        {/* -------------------------------- Additional Info ----------------------- */}
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={1}>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <FormControl fullWidth size="small">
                                                                    <InputLabel id="nationality-label">Nationality</InputLabel>
                                                                    <Select
                                                                        labelId="nationality-label"
                                                                        id="nationality-select"
                                                                        value={patNationality}
                                                                        label="Nationality"
                                                                        onChange={patNationalityHandleChange}
                                                                    >
                                                                        <MenuItem value="India">India</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <FormControl fullWidth size="small">
                                                                    <InputLabel id="religion-label">Religion</InputLabel>
                                                                    <Select
                                                                        labelId="religion-label"
                                                                        id="religion-select"
                                                                        value={patReligion}
                                                                        label="Religion"
                                                                        onChange={patReligionHandleChange}
                                                                    >
                                                                        <MenuItem value="Hindu">Hindu</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <FormControl fullWidth size="small">
                                                                    <InputLabel id="mother-tongue-label">Mother Tongue</InputLabel>
                                                                    <Select
                                                                        labelId="mother-tongue-label"
                                                                        id="mother-tongue-select"
                                                                        value={patMotherTongue}
                                                                        label="Mother Tongue"
                                                                        onChange={patMotherTongueHandleChange}
                                                                    >
                                                                        <MenuItem value="Assamese">Assamese</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <FormControl fullWidth size="small">
                                                                    <InputLabel id="occupation-label">Occupation</InputLabel>
                                                                    <Select
                                                                        labelId="occupation-label"
                                                                        id="occupation-select"
                                                                        value={patOccupation}
                                                                        label="Mother Tongue"
                                                                        onChange={patOccupationHandleChange}
                                                                    >
                                                                        <MenuItem value="Assamese">Assamese</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                    </Grid>

                                                    <Grid container spacing={1}>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <FormControl fullWidth size="small">
                                                                    <InputLabel id="community-label">Community</InputLabel>
                                                                    <Select
                                                                        labelId="community-label"
                                                                        id="community-select"
                                                                        value={patCommunity}
                                                                        label="Community"
                                                                        onChange={patCommunityHandleChange}
                                                                    >
                                                                        <MenuItem value="Hindu">Hindu</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <FormControl fullWidth size="small">
                                                                    <InputLabel id="blood-group-label">Blood Group</InputLabel>
                                                                    <Select
                                                                        labelId="blood-group-label"
                                                                        id="blood-group-select"
                                                                        value={patBloodGroup}
                                                                        label="Blood Group"
                                                                        onChange={patBloodGroupHandleChange}
                                                                    >
                                                                        <MenuItem value="O">O</MenuItem>
                                                                        <MenuItem value="A">A</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                    </Grid>

                                                    {/* Gurdain */}
                                                    <Grid container spacing={1}>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <FormControl required fullWidth size="small">
                                                                    <InputLabel id="guardian-label">Guardian</InputLabel>
                                                                    <Select
                                                                        labelId="guardian-label"
                                                                        id="guardian-select"
                                                                        value={patGuardian}
                                                                        label="Guardian *"
                                                                        onChange={patGuardianHandleChange}
                                                                        inputProps={{ required: true }}
                                                                    >
                                                                        <MenuItem value="Father">Father</MenuItem>
                                                                        <MenuItem value="Mother">Mother</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="outlined-required"
                                                                    label="Guardian&nbsp;Name"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="contact-person-one-phone-text"
                                                                    label="Phone&nbsp;Number&nbsp;"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="contact-person-one-alt-phone-required"
                                                                    label="Alternate&nbsp;Phone&nbsp;Number"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>

                                                    </Grid>

                                                    {/* contact person 2 */}
                                                    <Grid container spacing={1}>

                                                        <Grid item xs={12} md={3} >
                                                            <Item>
                                                                <FormControl fullWidth size="small">
                                                                    <InputLabel id="emergency-contact-person-relation-label">Emergency Contact Person </InputLabel>
                                                                    <Select
                                                                        labelId="emergency-contact-person-relation-label"
                                                                        id="emergency-contact-person-relation-select"
                                                                        value={emergencyContactPerson}
                                                                        label="Emergency Contact Person"
                                                                        onChange={emergencyContactPersonHandleChange}
                                                                        required
                                                                    >
                                                                        <MenuItem value="Parents">Parents</MenuItem>
                                                                        <MenuItem value="Friends">Friends</MenuItem>
                                                                        <MenuItem value="Relatives">Relatives</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="emergency-contact-person-name-text"
                                                                    label="Contact&nbsp;Person&nbsp;Name"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="emergency-contact-person-phone-text"
                                                                    label="Phone&nbsp;Number&nbsp;"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="emergency-contact-person-alt-phone"
                                                                    label="Alternate&nbsp;Phone&nbsp;Number"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>

                                                    </Grid>

                                                    {/* passport  */}
                                                    <Grid container spacing={1} mt={0}>

                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="passport-number-text"
                                                                    label="Passport&nbsp;Number&nbsp;"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    id="passport-issued-at-text"
                                                                    label="Passport&nbsp;issued&nbsp;at"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DatePicker label="Expiry Date" format="MM-DD-YYYY"
                                                                        sx={DatePickerStyle}
                                                                    />
                                                                </LocalizationProvider>
                                                            </Item>
                                                        </Grid>

                                                    </Grid>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                        {/* -------------------------------- End: Additional Info ----------------------- */}
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Button
                                                color="primary"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                                variant="contained"
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            {isStepOptional(activeStep) && (
                                                <Button color="primary" variant="contained" onClick={handleSkip} sx={{ mr: 1 }}>
                                                    Skip
                                                </Button>
                                            )}

                                            <Button onClick={handleNext} variant="contained">
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                    )
                                    // ======================== Form Three ======================
                                    : (<React.Fragment>
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    {/* Tab 1 */}
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} md={6}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="outlined-required"
                                                                    label="Address Line 1"
                                                                    defaultValue=""
                                                                    size="small"
                                                                    required
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="outlined-required"
                                                                    label="Address Line 2"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>

                                                    </Grid>

                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="ward-text"
                                                                    label="Ward"
                                                                    defaultValue=""
                                                                    size="small"
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="area-text"
                                                                    label="Area"
                                                                    defaultValue=""
                                                                    size="small"
                                                                    required
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="city-text"
                                                                    label="City/Village"
                                                                    defaultValue=""
                                                                    size="small"
                                                                    required
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="state-text"
                                                                    label="State"
                                                                    defaultValue=""
                                                                    size="small"
                                                                    required
                                                                />
                                                            </Item>
                                                        </Grid>

                                                    </Grid>

                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="country-text"
                                                                    label="Country"
                                                                    defaultValue="India"
                                                                    size="small"
                                                                    required
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="pin-text"
                                                                    label="Pin"
                                                                    defaultValue=""
                                                                    size="small"
                                                                    required
                                                                />
                                                            </Item>
                                                        </Grid>

                                                    </Grid>

                                                </Box>
                                            </CardContent>
                                        </Card>

                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Button
                                                color="primary"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                                variant="contained"
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            {isStepOptional(activeStep) && (
                                                <Button color="primary" variant="contained" onClick={handleSkip} sx={{ mr: 1 }}>
                                                    Skip
                                                </Button>
                                            )}

                                            <Button onClick={handleNext} variant="contained">
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                    )
                    }
                </Box >
            </CardContent>
        </Card>

    );
}