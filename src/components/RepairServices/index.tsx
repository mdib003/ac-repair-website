import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';

export const RepairServiceComponent = () => {

    const [fullName, setFullName] = useState('')
    const [contactNo, setContactNo] = useState<number | "">("");
    const [emailState, setEmailState] = useState('')
    const [address, setAddress] = useState('')
    const [productCompany, setProductComapny] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [problemState, setProblemState] = useState('')
    const [check, setCheck] = useState(false)
    const [detailIssue, setDetailIssue] = useState('')

    const productCompanyChange = (e: SelectChangeEvent) => {
        setProductComapny(e.target.value as string);
    }

    const productCategoryChange = (e: SelectChangeEvent) => {
        setProductCategory(e.target.value as string);
    }

    const problemChange = (e: SelectChangeEvent) => {
        setProblemState(e.target.value as string);
    }

    const submitQuery =  async (e: Event) => {
        e.preventDefault()
        if (!fullName || !contactNo || !emailState || !address || !productCompany || !productCategory || !problemState || !check) {
            return 
        }

        const data = {fullName, contactNo, emailState, address, productCompany, productCategory, problemState}

        const submitData = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        })

        const { error, message } = await submitData.json();
        console.log(message);
        return;
      /*   const response = await submitData.json()
        console.log(response) */
        
    }

    return (
        <>
            <div className="container container-pad repair-services-page">
                <form>
                    <TextField id="fullName" label="Full Name" variant="outlined" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                    <TextField id="mobileNumber" label="Contact No" variant="outlined" type="number" value={contactNo} onChange={(e) => setContactNo(parseInt(e.target.value))} required/>
                    <TextField id="emailAddress" label="Email" variant="outlined" type="email" value={emailState} onChange={(e) => setEmailState(e.target.value)} required/>
                    <TextField id="address" label="Address" variant="outlined" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    <div style={{ width: '200px', marginTop: '20px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="productCompany">Company</InputLabel>
                            <Select
                                labelId="productCompany"
                                id="productCompany"
                                value={productCompany}
                                label="Company"
                                onChange={productCompanyChange}
                                required
                            >
                                <MenuItem value={'Blue Star'}>Blue Star</MenuItem>
                                <MenuItem value={'Bosch'}>Bosch</MenuItem>
                                <MenuItem value={'Carrier'}>Carrier</MenuItem>
                                <MenuItem value={'Daikin'}>Daikin</MenuItem>
                                <MenuItem value={'Godrej'}>Godrej</MenuItem>
                                <MenuItem value={'Lg'}>Lg</MenuItem>
                                <MenuItem value={'Lloyd'}>Lloyd</MenuItem>
                                <MenuItem value={'Mitashi'}>Mitashi</MenuItem>
                                <MenuItem value={'Onida'}>Onida</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ width: '200px', marginTop: '20px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="productCategory">Category</InputLabel>
                            <Select
                                labelId="productCategory"
                                id="productCategory"
                                value={productCategory}
                                label="Category"
                                onChange={productCategoryChange}
                            >
                                <MenuItem value={'AC'}>AC</MenuItem>
                                <MenuItem value={'Air Cooler'}>Air Cooler</MenuItem>
                                <MenuItem value={'Fridge'}>Fridge</MenuItem>
                                <MenuItem value={'Deep Fridge'}>Deep Fridge</MenuItem>
                                <MenuItem value={'Water Cooler'}>Water Cooler</MenuItem>
                                <MenuItem value={'Washing Machine'}>Washing Machine</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ width: '200px', marginTop: '20px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="problem">Problem</InputLabel>
                            <Select
                                labelId="problem"
                                id="problem"
                                value={problemState}
                                label="Problem"
                                onChange={problemChange}
                            >
                                <MenuItem value={'Thermostat Malfunction'}>Thermostat Malfunction</MenuItem>
                                <MenuItem value={'Failing Fans'}>Failing Fans</MenuItem>
                                <MenuItem value={'Leaky Ducts'}>Leaky Ducts</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Brief your machine issue"
                        style={{ width: 200 }}
                        value={detailIssue}
                        onChange={(e) => setDetailIssue(e.target.value)}
                    />
                    <div>
                        <Checkbox checked={check} onChange={() => setCheck(!check)} />
                        <span>I authorize to contact me on my Mobile Number and Email</span>
                    </div>
                    <button className='submit-button' onClick={submitQuery}>Submit</button>
                </form>
            </div>
            <style jsx>{`

        `}</style>
        </>
    )
}
