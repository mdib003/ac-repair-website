import TextField from '@mui/material/TextField';
import React, { useEffect, useState, useRef } from "react";
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import emailjs from '@emailjs/browser';

type ProblemProps = {
    [key: string]: string[]
}

const problemsArray =
{
    ac: [
        "Less cooling",
        "No cooling",
        "Power on issues",
        "Deep cleaning servicing",
        "Installation",
        "Un-installation",
        "Water leaking"
    ],
    fridge: [
        "Power on issues",
        "Less cooling",
        "No cooling",
        "Water leaking",
        "Over cooling",
        "Bulp problem",
    ],
    washingMachine: [
        "Fully automatic",
        "Top load check up",
        "Front load check up",
        "Installation",
        "Un-installation"
    ],
    deepFridge: [
        "Other"
    ],
    waterCooler: [
        "Other"
    ]
}



export const RepairServiceComponent = () => {

    const formRef = useRef() as React.MutableRefObject<string | HTMLFormElement>

    const [data,] = useState<ProblemProps>(problemsArray)
    const [problemsList, setProblemsList] = useState<string[]>(problemsArray.ac)
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        contactNo: '',
        address: ''
    })
    const [productCompany, setProductComapny] = useState('Blue Star')
    const [productCategory, setProductCategory] = useState('ac')
    const [problemState, setProblemState] = useState<string>(problemsArray['ac'][0])
    const [check, setCheck] = useState(false)
    const [detailIssue, setDetailIssue] = useState('')
    const [messageStatus, setMessageStatus] = useState("")
    const [fullNameError, setFullNameError] = useState(false)
    const [contactError, setContactError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [companyError, setCompanyError] = useState(false)
    const [categoryError, setCategoryError] = useState(false)
    const [problemError, setProblemError] = useState(false)

    useEffect(() => {
        problemsListChange()
    }, [productCategory])

    const productCompanyChange = (e: SelectChangeEvent) => {
        setMessageStatus('')
        setProductComapny(e.target.value as string);
    }

    const productCategoryChange = (e: SelectChangeEvent) => {
        setMessageStatus('')
        setProductCategory(e.target.value as string);
    }

    const problemsListChange = () => {
        setProblemsList(data[productCategory])
        setProblemState(data[productCategory][0])
    }

    const problemChange = (e: SelectChangeEvent) => {
        setMessageStatus('')
        setProblemState(e.target.value as string);
    }

    const detailsHanlder = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessageStatus('')
        if (e.target.name === 'fullName' && !userData.fullName) {
            setFullNameError(true)
        } else if (e.target.name === 'fullName') {
            setFullNameError(false)
        }

        if (e.target.name === 'contactNo' && !userData.contactNo) {
            setContactError(true)
        } else if (e.target.name === 'contactNo') {
            setContactError(false)
        }

        if (e.target.name === 'email' && !userData.email) {
            setEmailError(true)
        } else if (e.target.name === 'email') {
            setEmailError(false)
        }
        if (e.target.name === 'address' && !userData.address) {
            setAddressError(true)
        } else if (e.target.name === 'address') {
            setAddressError(false)
        }

        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const submitQuery = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (!userData.fullName || !userData.contactNo || !userData.email || !userData?.address || !productCompany || !productCategory || !problemState) {
            setMessageStatus('Please fill all the required fields')
            return
        }

        const data = { fullName: userData.fullName, contactNo: userData.contactNo, email: userData.email, address: userData?.address, productCompany, productCategory, problemState }

        /*  const submitData = await fetch('/api/sendEmail', {
             method: 'POST',
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(data)
         }) */

       emailjs.sendForm('service_znnk28f', 'template_ivjxoem', formRef.current, 'CrjGpP2bD3_YfgdUy')
            .then((result) => {
                console.log(result.text);
                setMessageStatus('Your message has been delivered')
                setUserData({
                    fullName: '',
                    email: '',
                    contactNo: '',
                    address: ''
                })
            }, (error) => {
                console.log(error.text);
            }); 
 
        /*  const { error, message } = await submitData.json(); */
        return;
    }

    return (
        <>
            <div className="container repair-services-page">
                <div className='form-container'>
                    <form ref={formRef}>
                        <div className='name-container'>
                            <TextField id="fullName" label="Full Name" variant="outlined" type="text" value={userData.fullName} onChange={detailsHanlder} required error={fullNameError} onBlur={detailsHanlder} name='fullName' />
                        </div>
                        <div className='flex'>
                            <div className='contact-container'>
                                <TextField id="mobileNumber" label="Contact No" variant="outlined" type="number" value={userData.contactNo} onChange={detailsHanlder} onBlur={detailsHanlder} required error={contactError} name='contactNo' />
                            </div>
                            <div className='email-container'>
                                <TextField id="emailAddress" label="Email" variant="outlined" type="email" value={userData.email} onChange={detailsHanlder} onBlur={detailsHanlder} required error={emailError} name='email' />
                            </div>
                        </div>
                        <div className='address-container'>
                            <TextField id="address" label="Address" variant="outlined" type="text" value={userData.address} onChange={detailsHanlder} onBlur={detailsHanlder} required name='address' error={addressError} />
                        </div>
                        <div className='flex'>
                            <div className='company-container'>
                                <FormControl fullWidth>
                                    <InputLabel id="productCompany">Company</InputLabel>
                                    <Select
                                        labelId="productCompany"
                                        id="productCompany"
                                        value={productCompany}
                                        label="Company"
                                        onChange={productCompanyChange}
                                        required
                                        name='productCompany'
                                        error={companyError}
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
                            <div className='category-container'>
                                <FormControl fullWidth>
                                    <InputLabel id="productCategory">Product</InputLabel>
                                    <Select
                                        labelId="productCategory"
                                        id="productCategory"
                                        value={productCategory}
                                        label="Category"
                                        onChange={productCategoryChange}
                                        error={categoryError}
                                        name='product'
                                    >
                                        <MenuItem value={'ac'}>AC</MenuItem>
                                        <MenuItem value={'fridge'}>Fridge</MenuItem>
                                        <MenuItem value={'deepFridge'}>Deep Fridge</MenuItem>
                                        <MenuItem value={'waterCooler'}>Water Cooler</MenuItem>
                                        <MenuItem value={'washingMachine'}>Washing Machine</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='problem-container'>
                            <FormControl fullWidth>
                                <InputLabel id="problem">Problem</InputLabel>
                                <Select
                                    labelId="problem"
                                    id="problem"
                                    value={problemState}
                                    label="Problem"
                                    onChange={problemChange}
                                    error={problemError}
                                    name='problem'
                                >
                                    {problemsList?.map((p) => {
                                        return (
                                            <MenuItem value={p} key={p}>{p}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='textarea-container'>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Brief your issue"
                                value={detailIssue}
                                onChange={(e) => setDetailIssue(e.target.value)}
                                name='message'
                            />
                        </div>
                        <div className='checkbox-container'>
                            <Checkbox checked={check} onChange={() => setCheck(!check)} />
                            <span className='checkbox-text'>I authorize to contact me via Mobile and/or Email</span>
                        </div>
                        <button className='submit-button' onClick={submitQuery}>Submit</button>
                        {messageStatus && <p>{messageStatus}</p>}
                    </form>
                </div>
            </div>
            <style jsx>{`

            .repair-services-page {
                padding-top: 24px;
                padding-bottom: 24px;
            }

            .form-container {
                max-width: 448px;
                margin: 0 auto;
                padding: 24px;
                box-shadow: 0 0 20px rgba(52, 69, 113, 0.16);
                border-radius: 12px;
            }

            .checkbox-text {
                font-size: 12px;
              }

              .submit-button {
                width: 100%;
                margin-left: 0px;
              }
        `}</style>
        </>
    )
}
