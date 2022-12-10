import React, { useState } from 'react';

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleTextOptions = () => {
        let myText;
        if(selectedUtils==="replace"){
            const reg= new RegExp(replaceFrom, "g");
            setText(text.replace(reg,replaceTo))
            // console.log(replaceFrom,replaceTo)
        }else{
            if(selectedUtils==="upperCase"){
            myText = text.toUpperCase();
            }
            if(selectedUtils==="lowerCase"){
            myText = text.toLowerCase();
            }
            // console.log(myText);
            setText(myText);
        }
    }

    const clearText=() =>{
        setText("");
        setReplaceFrom("");
        setReplaceTo("");
    }

    const setSelectedValue= (option) =>{
        if(option==="replace"){
            setHideReplace(false);
        }else{
            setHideReplace(true);
        }
        setSelectedUtils(option);

    }
    const setReplaceSrc=(e)=>{
        setReplaceFrom(e.target.value);
    }
    const setReplaceDest=(e)=>{
        setReplaceTo(e.target.value);
    }
    
    const copyText=(e)=>{
        const value= document.getElementById("textInput");
        // @ts-ignore
        value.select(); 
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard.","success",1500);
    }

    let sty=
            (props.mode==="dark")?
            {
                backgroundColor: "black",
                color: "white"
            }
            :
            {
                backgroundColor: "white",
                color: "black"
            }
    
    const setButtonOption=() =>{
        switch(selectedUtils){
            case "upperCase": return "Convert to UpperCase";
            case "lowerCase": return "Convert to LowerCase";
            case "replace": return "Replace";
            default: return selectedUtils;
        }
    }
    //counts the words typed in textArea
    const countWords= ()=>{
        let words= text.trim().split(/\s+/)
        let length= words.length;
        if(!words[0]) return 0;
        return length;
    }
    //Control text inside TextArea
    const [text, setText] = useState("");

    //Control selected dropdown text
    const [selectedUtils,setSelectedUtils] = useState("upperCase");

    //Controll replace values
    const [replaceFrom,setReplaceFrom] = useState("");
    const [replaceTo,setReplaceTo] = useState("");
    const [hideReplace,setHideReplace] = useState(true);

    const ReplaceInput= (
        <div>
        <input type="text" className="rounded" style={sty} onChange={setReplaceSrc} value={replaceFrom} placeholder="from"/>
        <input type="text" className="mx-3 rounded" style={sty} onChange={setReplaceDest} value={replaceTo} placeholder="to"/>
        </div>

    );

    return (
        <>
            <div className='container' >
                <div className="my-3">
                    <h2>{props.heading}</h2>
                    <p className="d-inline-block text-right">{countWords()} words and {text.length} characters</p>
                    <textarea className="form-control" id="textInput" onChange={handleOnChange} value={text} rows={3} style={sty} placeholder="Enter some text here."></textarea>
                    <select className="custom-select my-1 mr-sm-2 rounded" id="inlineFormCustomSelectPref" value={selectedUtils} style={sty} onChange={(event)=>setSelectedValue(event.target.value)}>
                        <option value="upperCase">UpperCase</option>
                        <option value="lowerCase">LowerCase</option>
                        <option value="replace">Replace</option>
                    </select>
                    {hideReplace?null:ReplaceInput}
                    <div className="funtion-buttons my-3">
                    <button className="btn btn-primary" onClick={handleTextOptions}>{setButtonOption()}</button>
                    <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
                    <button className="btn btn-primary my-2" onClick={copyText}>Copy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
