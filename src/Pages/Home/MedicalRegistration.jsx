import React, { useEffect, useReducer, useState } from "react";
// import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid, Box, Card, CardActions, CardContent, Button, Typography, FormControl, InputAdornment, InputLabel, MenuItem, Paper, Select, TextField, Tabs, Tab, styled } from '@mui/material';

import PropTypes from 'prop-types';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import FormReducer from "../../Reducer/FormReducer";
import axios from "../../Api/axios";
import dayjs from "dayjs";
import { getAgeDetails } from "../../Lib/MyLibrary";
import '../../Styles/theme_1.scss';

const steps = ['Patient Information', 'Additional Information', 'Address Details'];

function Item({ children }) {
    return (
        <div style={{ border: '1px dashed #fff', padding: 2 }}> {children} </div>
    );
}

const initialFormData = {
    mrNumber: "",
    regnDate: "",
    regnStatus: "",
    patTitle: "",
    patFname: "",
    patMname: "",
    patLname: "",
    patGender: "",
    patDob: dayjs(),
    patAgeY: 0,
    patAgeM: 0,
    patAgeD: 0,
    patMaritalStatus: "",
    patPhone: "",
    patPhoneAlt: "",
    patAge: "",
    patNationality: "",
    patReligion: "",
    patMotherTongue: "",
    patOccupation: "",
    patCommunity: "",
    patBloodGroup: "",
    patGuardianRelation: "",
    patGuardianName: "",
    patGuardianPhone: "",
    patGuardianPhoneAlt: "",
    emergencyContactPersonRelation: "",
    emergencyContactPersonName: "",
    emergencyContactPersonPhone: "",
    emergencyContactPersonPhoneAlt: "",
    patPassportNum: "",
    patPassportIssuedAt: "",
    patPassportExpiry: "",
    patAddressLineOne: "",
    patAddressLineTwo: "",
    patAddressWard: "",
    patAddressArea: "",
    patAddressCity: "",
    patAddressState: "",
    patAddressCountry: "India",
    patAddressPin: ""
};

const initialFormErrData = {
    mrNumber: false,
    regnDate: false,
    regnStatus: false,
    patTitle: false,
    patFname: false,
    patMname: false,
    patLname: false,
    patGender: false,
    patDob: false,
    patAgeY: false,
    patAgeM: false,
    patAgeD: false,
    patMaritalStatus: false,
    patPhone: false,
    patPhoneAlt: false,
    patAge: false,
    patNationality: false,
    patReligion: false,
    patMotherTongue: false,
    patOccupation: false,
    patCommunity: false,
    patBloodGroup: false,
    patGuardianRelation: false,
    patGuardianName: false,
    patGuardianPhone: false,
    patGuardianPhoneAlt: false,
    emergencyContactPersonRelation: false,
    emergencyContactPersonName: false,
    emergencyContactPersonPhone: false,
    emergencyContactPersonPhoneAlt: false,
    patPassportNum: false,
    patPassportIssuedAt: false,
    patPassportExpiry: false,
    patAddressLineOne: false,
    patAddressLineTwo: false,
    patAddressWard: false,
    patAddressArea: false,
    patAddressCity: false,
    patAddressState: false,
    patAddressCountry: false,
    patAddressPin: false
};

const csrf = () => axios.get("/sanctum/csrf-cookie");

const formSubmitHandler = async ({ ...data }) => {
    await csrf();
    // setErrors([]);

    console.log('form submitting');

    try {
        await axios.post('/medical-registration', data);
        // await getUser();
        // navigate('/')
    } catch (e) {

        console.log(e.response);
        // if (e.response.status === 422) {
        //     console.log(e.response.data);
        //     // setErrors(e.response.data.errors)
        // }

    }
}



const today = dayjs();
const tomorrow = dayjs().add(1, 'day');

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const [formInput, setFormInput] = useReducer(FormReducer, initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrData);

    const validateFormData = (formData) => {

        let isError = false;

        let errObj = formErrors;
        /* ---------- Validate Age: years ---------*/
        if (formData.patAgeY != undefined) {
            if (formData.patAgeY < 0 || formData.patAgeY > 110) {
                errObj.patAgeY = 'Year must be between 0-110';
                isError = true;
            } else {
                errObj.patAgeY = false;
            }
        }

        /* ---------- Validate Age: Months ---------*/
        if (formData.patAgeM != undefined) {
            if (formData.patAgeM < 0 || formData.patAgeM > 11) {
                errObj.patAgeM = 'Month must be between 0 - 11';
                isError = true;
            } else {
                errObj.patAgeM = false
            }
        }

        /* ---------- Validate Age: Days ---------*/
        if (formData.patAgeD != undefined) {
            if (formData.patAgeD < 0) {
                errObj.patAgeD = 'Days must be between 0 - 30';
                isError = true;
            } else if (formData.patAgeD > 30 && (formData.patAgeY < 1 && formData.patAgeM < 1)) {
                errObj.patAgeD = 'Days must be between 0 - 30';
                isError = true;
            } else {
                errObj.patAgeD = false
            }
        }

        setFormErrors({ ...errObj });

        if (isError) {
            return false;
        }
        else {
            return true;
        }

    }

    const formInputHandler = (e) => {

        setFormInput({
            type: 'HANDLE_INPUT_TEXT',
            field: e.target.name,
            payload: e.target.value,
        });
    }

    const updateFormInputValue = (field, value) => {
        setFormInput({
            type: 'HANDLE_INPUT_TEXT',
            field: field,
            payload: value,
        });
    }

    const formDateHandler = (dateFieldName, DateValue) => {
        // let formattedDate = dayjs(DateValue).format('YYYY-MM-DD');
        setFormInput({
            type: 'HANDLE_INPUT_TEXT',
            field: dateFieldName,
            payload: DateValue,
        });
    }

    const [dobStatus, setDobStatus] = useState(false);

    /** On change of age change dob */
    useEffect(() => {
        console.log('use state 1 On Age Change : ' + dobStatus)
        // console.log('Y: ' + formInput.patAgeY + ' M: ' + formInput.patAgeM + ' D: ' + formInput.patAgeD)
        if (dobStatus) {
            console.log('use state 1 On Age Change Status: ' + dobStatus)
            let isValid = validateFormData(formInput);

            if (isValid) {
                let newPatDOB = dayjs()
                    .subtract(formInput.patAgeD, 'day')
                    .subtract(formInput.patAgeM, 'month')
                    .subtract(formInput.patAgeY, 'year');
                setFormInput({
                    type: 'HANDLE_INPUT_TEXT',
                    field: 'patDob',
                    payload: newPatDOB,
                });
            }
        }
        else {
            setDobStatus(true);
            console.log('use state 1 On Age Change Status Active: ' + dobStatus)
        }
    },
        [formInput.patAgeY, formInput.patAgeM, formInput.patAgeD]
    )

    /* ================== On change of DOB =============== */
    useEffect(() => {
        // console.log('use state 2 : ' + dobStatus)

        let todaysDate = dayjs();
        let selectedDate = dayjs(formInput.patDob);
        let calcAge = getAgeDetails(selectedDate, todaysDate);

        // console.log(">> " + JSON.stringify(calcAge));
        // console.log("Final Age: " + calcAge.years + " years " + calcAge.months + " months " + calcAge.days + " Days")

        updateFormInputValue('patAgeY', calcAge.years);
        updateFormInputValue('patAgeM', calcAge.months);
        updateFormInputValue('patAgeD', calcAge.days);

    }, [formInput.patDob]);


    /* Form reset to initaila state */
    const formReset = () => {
        setFormInput({
            type: 'RESET',
            state: initialFormData
        });
    };

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
        formReset();
        console.log(formInput)
    };

    const handleFinish = () => {

        formSubmitHandler(formInput);

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // alert(activeStep)
        formReset();
        console.log(formInput)
    }


    //** get initial data for select boxes */
    const [stateList, setStateList] = useState([]);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                // console.log(response.data)
                if (response.data) {
                    setStateList(response.data)
                }
            })
            .catch(error => {
                console.log(error)
            });

            // setFormInput({
            //     type: 'HANDLE_INPUT_TEXT',
            //     field: 'patDob',
            //     payload: dayjs("2023-02-03"),
            // });

    }, []);


    ///////////////////////////////////////////

    const DatePickerStyle = {
        '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': { height: 10 },
        '.css-1kxfkib-MuiFormLabel-root-MuiInputLabel-root': { top: '-5px' }
    }

    /////////////////////////////////////////////

    return (
        <Card sx={{ minWidth: 275, marginBottom: '100px' }}>
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    {/* -------------------------------------- */}
                    <div className="page-header">Medical Registration</div>
                    {/* -------------------------------------- */}
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
                                                                size="small"
                                                                name="mrNumber"
                                                                value={formInput.mrNumber}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                size="small"
                                                                name="regnDate"
                                                                value={formInput.regnDate}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                size="small"
                                                                name="regnStatus"
                                                                value={formInput.regnStatus}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                    label="Title"
                                                                    name="patTitle"
                                                                    value={formInput.patTitle}
                                                                    onChange={(e) => formInputHandler(e)}
                                                                >
                                                                    {
                                                                        stateList.map(item => (
                                                                            <MenuItem key={item.id} value={item.id}>{item.id}</MenuItem>
                                                                        ))
                                                                    }
                                                                    {/* <MenuItem value="MRS">MRS</MenuItem>
                                                                    <MenuItem value="MS">MS</MenuItem>
                                                                    <MenuItem value="PROF">PROF</MenuItem>
                                                                    <MenuItem value="REV">REV</MenuItem>
                                                                    <MenuItem value="SO">S/O</MenuItem>
                                                                    <MenuItem value="SR">SR</MenuItem>
                                                                    <MenuItem value="WO">W/O</MenuItem> */}
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
                                                                size="small"
                                                                name="patFname"
                                                                value={formInput.patFname}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                size="small"
                                                                name="patMname"
                                                                value={formInput.patMname}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                size="small"
                                                                name="patLname"
                                                                value={formInput.patLname}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                    label="Gender"
                                                                    name="patGender"
                                                                    value={formInput.patGender}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                <DatePicker
                                                                    disableFuture
                                                                    // defaultValue={today}
                                                                    label="Date of Birth"
                                                                    openTo="year"
                                                                    format="YYYY-MM-DD"
                                                                    sx={DatePickerStyle}
                                                                    value={formInput.patDob}
                                                                    onChange={(value) => formDateHandler("patDob", value, true)}
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
                                                                            inputProps: { min: 0, max: 110 }
                                                                        }}
                                                                        error={Boolean(formErrors.patAgeY)}
                                                                        helperText={formErrors.patAgeY}
                                                                        fullWidth
                                                                        required
                                                                        size="small"
                                                                        type="number"
                                                                        name="patAgeY"
                                                                        value={formInput.patAgeY}
                                                                        onChange={(e) => formInputHandler(e)}
                                                                    />
                                                                    <TextField
                                                                        label="Month"
                                                                        id="outlined-start-adornment"
                                                                        sx={{ m: 1, width: '12ch' }}
                                                                        InputProps={{
                                                                            startAdornment: <InputAdornment position="start">M</InputAdornment>,
                                                                            inputProps: { min: 0, max: 11 }
                                                                        }}
                                                                        error={Boolean(formErrors.patAgeM)}
                                                                        helperText={formErrors.patAgeM}
                                                                        fullWidth
                                                                        required
                                                                        size="small"
                                                                        type="number"
                                                                        name="patAgeM"
                                                                        value={formInput.patAgeM}
                                                                        onChange={(e) => formInputHandler(e)}
                                                                    />
                                                                    <TextField
                                                                        label="Day"
                                                                        id="outlined-start-adornment"
                                                                        sx={{ m: 1, width: '12ch' }}
                                                                        InputProps={{
                                                                            startAdornment: <InputAdornment position="start">D</InputAdornment>,
                                                                            inputProps: { min: 0, max: 30 }
                                                                        }}
                                                                        error={Boolean(formErrors.patAgeD)}
                                                                        helperText={formErrors.patAgeD}
                                                                        fullWidth
                                                                        required
                                                                        size="small"
                                                                        type="number"
                                                                        name="patAgeD"
                                                                        value={formInput.patAgeD}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                    // error={!formInput.patMaritalStatus}
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    label="Gender"
                                                                    name="patMaritalStatus"
                                                                    value={formInput.patMaritalStatus}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                size="small"
                                                                name="patPhone"
                                                                value={formInput.patPhone}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                size="small"
                                                                name="patPhoneAlt"
                                                                value={formInput.patPhoneAlt}
                                                                onChange={(e) => formInputHandler(e)}
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
                                                                        label="Nationality"
                                                                        name="patNationality"
                                                                        value={formInput.patNationality}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                        label="Religion"
                                                                        name="patReligion"
                                                                        value={formInput.patReligion}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                        label="Mother Tongue"
                                                                        name="patMotherTongue"
                                                                        value={formInput.patMotherTongue}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                        label="Occupation"
                                                                        name="patOccupation"
                                                                        value={formInput.patOccupation}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                        label="Community"
                                                                        name="patCommunity"
                                                                        value={formInput.patCommunity}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                        label="Blood Group"
                                                                        name="patBloodGroup"
                                                                        value={formInput.patBloodGroup}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                        inputProps={{ required: true }}
                                                                        label="Guardian *"
                                                                        name="patGuardianRelation"
                                                                        value={formInput.patGuardianRelation}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="patGuardianName"
                                                                    value={formInput.patGuardianName}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="patGuardianPhone"
                                                                    value={formInput.patGuardianPhone}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="patGuardianPhoneAlt"
                                                                    value={formInput.patGuardianPhoneAlt}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                        required
                                                                        label="Emergency Contact Person"
                                                                        name="emergencyContactPersonRelation"
                                                                        value={formInput.emergencyContactPersonRelation}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                    // defaultValue=""
                                                                    size="small"
                                                                    name="emergencyContactPersonName"
                                                                    value={formInput.emergencyContactPersonName}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="emergencyContactPersonPhone"
                                                                    value={formInput.emergencyContactPersonPhone}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="emergencyContactPersonPhoneAlt"
                                                                    value={formInput.emergencyContactPersonPhoneAlt}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="patPassportNum"
                                                                    value={formInput.patPassportNum}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="patPassportIssuedAt"
                                                                    value={formInput.patPassportIssuedAt}
                                                                    onChange={(e) => formInputHandler(e)}
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DatePicker
                                                                        label="Expiry Date"
                                                                        format="MM-DD-YYYY"
                                                                        sx={DatePickerStyle}
                                                                        name="patPassportExpiry"
                                                                        value={formInput.patPassportExpiry}
                                                                        onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    required
                                                                    name="patAddressLineOne"
                                                                    value={formInput.patAddressLineOne}
                                                                    onChange={(e) => formInputHandler(e)}
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="outlined-required"
                                                                    label="Address Line 2"
                                                                    size="small"
                                                                    name="patAddressLineTwo"
                                                                    value={formInput.patAddressLineTwo}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    name="patAddressWard"
                                                                    value={formInput.patAddressWard}
                                                                    onChange={(e) => formInputHandler(e)}
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="area-text"
                                                                    label="Area"
                                                                    size="small"
                                                                    required
                                                                    name="patAddressArea"
                                                                    value={formInput.patAddressArea}
                                                                    onChange={(e) => formInputHandler(e)}
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="city-text"
                                                                    label="City/Village"
                                                                    size="small"
                                                                    required
                                                                    name="patAddressCity"
                                                                    value={formInput.patAddressCity}
                                                                    onChange={(e) => formInputHandler(e)}
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="state-text"
                                                                    label="State"
                                                                    size="small"
                                                                    required
                                                                    name="patAddressState"
                                                                    value={formInput.patAddressState}
                                                                    onChange={(e) => formInputHandler(e)}
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
                                                                    size="small"
                                                                    required
                                                                    name="patAddressCountry"
                                                                    value={formInput.patAddressCountry}
                                                                    onChange={(e) => formInputHandler(e)}
                                                                />
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <Item>
                                                                <TextField
                                                                    fullWidth
                                                                    id="pin-text"
                                                                    label="Pin"
                                                                    size="small"
                                                                    required
                                                                    name="patAddressPin"
                                                                    value={formInput.patAddressPin}
                                                                    onChange={(e) => formInputHandler(e)}
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

                                            <Button onClick={handleFinish} variant="contained">
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