import {useState} from 'react';


function Calculator() {
    // Hooks that control the calculations
    const [data, setData] = useState("");
    const [result, setResult] = useState("");
    const [finishedOperation, setFinishedOperation] = useState(false);

    const ops = ['/','*','+','-','.'];
    const pattern = /\d|[.]/gi;

    const updateData = (value) => {
        //If you finished the operation and you pressed a number or dot then reset the value
        if (finishedOperation && (pattern.test(value))) {
            setData('');
            setResult('');
            setFinishedOperation(false);
            return ;
        } else if (finishedOperation && !(pattern.test(value))) {
            // If the operation is finished but you pressed another operation then continue operating
            setFinishedOperation(false);
        }
        if ( (ops.includes(value) && (data === '') )|| (ops.includes(value) && (ops.includes(data.slice(-1)))) ){
            return ; //return and not do anything
        }
        setData(data + value);

        if (!ops.includes(value)) {
            setResult(eval(data+value).toString());
        }
    };

    // Function that calculates the result and renders it in the text bar
    const calculate = ()=>{
        setData(eval(data).toString());
        setFinishedOperation(true);
    };

    // Function that resets the calculator
    const clearData = () => {
        setData('');
        setResult('');
    };

    return (
        <>
            <div className="card">
                <img src="https://images.squarespace-cdn.com/content/v1/542b5f29e4b06f71cbc3580e/1614923451542-5XL2CUXBLV43IASCENTL/Japan-Landscape-Photographer-Mt-Fuji-781.jpg" className="card-img-top" alt="japan lake landscape" />
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" disabled value={data || "0"} ></input>
                        {/* <span className="form-control" id="basic-addon">{result}</span> */}

                        <span className="btn btn-primary w-25" id="basic-addon2" onClick={calculate}>  =  </span>
                    </div>
                    
                    <div className="row text-center">
                        <div className="col bg-info-subtle">
                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('1'))}>1</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('2'))}>2</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('3'))}>3</button>
                            </div>

                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('4'))}>4</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('5'))}>5</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('6'))}>6</button>
                            </div>
                            
                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('7'))}>7</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('8'))}>8</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('9'))}>9</button>
                            </div>

                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('0'))}>0</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(updateData('.'))}>.</button>
                                <button className="btn btn-primary btn-lg mx-3" onClick={()=>(clearData())}>Clear</button>
                            </div>
                        </div>

                        <div className="col-4 bg-danger-subtle">
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg" onClick={()=>(updateData('+'))}>+</button>
                            </div>
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg" onClick={()=>(updateData('-'))}>-</button>
                            </div>
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg" onClick={()=>(updateData('/'))}>/</button>
                            </div>
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg" onClick={()=>(updateData('*'))}>*</button>
                            </div>                          
                                                                                    
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Calculator;