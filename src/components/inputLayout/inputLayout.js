import React from 'react';
import FormInputs from '../inputs/input'


const inputLayout=(props)=>{
    return (
        <div>
            <FormInputs label='name' place="Full name" informer="Enter your full name(min 4 letters)" type='text' change={props.change} name='Full Name:'/>
            <FormInputs label='mail' place="Mail id" informer="Enter your mail id" type='email' change={props.change} name='Mail id:'/>
            <FormInputs label='org' place="Organisation name" informer="Enter your Organisation name" type='text' change={props.change} name='Organisation name:'/>
            <FormInputs label='id' place="Employee ID" informer="Enter your Employee ID" type='text' change={props.change} name='Employee ID no:'/>
            <FormInputs label='mobile' place="10 Digit mobile number" informer="Enter your 10 digit mobile number" type='tel'change={props.change} name='Mobile Number'/>
            <FormInputs label='photo' type='file' name='ID card'/>
        </div>
    )
}


export default inputLayout;


// 