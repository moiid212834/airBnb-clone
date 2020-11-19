
import React from 'react';
import PinInput from 'react-pin-input';

const PinForm =()=>{
    
    return (
        <div>
        <div className="mb-2">Enter the code we sent over to <span>+12345754345</span></div>
        <PinInput 
            length={4} 
            initialValue=""
            secret 
            onChange={(value, index) => {}} 
            type="numeric" 
            inputMode="number"
            style={{padding: '10px 0px'}}  
            inputStyle={{borderColor: 'gray', borderRadius:"10px"}}
            inputFocusStyle={{borderColor: 'blue'}}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
        <div className="my-2">Didn't get the code? <a href="#">More Options</a></div>
        </div>
   
    );
  }

export default PinForm;
