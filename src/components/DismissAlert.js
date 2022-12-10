import React from 'react'

export default function DismissAlert(props) {
    const capitalized=(wordstr)=>{
        let word= wordstr.toLowerCase();
        return word[0].toUpperCase()+ word.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)+"!"}</strong> {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
