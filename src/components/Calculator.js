function Calculator() {

    return (
        <>
            <div className="card">
                <img src="https://images.squarespace-cdn.com/content/v1/542b5f29e4b06f71cbc3580e/1614923451542-5XL2CUXBLV43IASCENTL/Japan-Landscape-Photographer-Mt-Fuji-781.jpg" className="card-img-top" alt="japan lake landscape" />
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input className="form-control" type="number" disabled></input>
                        <span className="btn btn-primary w-25" id="basic-addon2">  =  </span>
                    </div>
                    
                    <div className="row text-center">
                        <div className="col bg-info-subtle">
                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3">1</button>
                                <button className="btn btn-primary btn-lg mx-3">2</button>
                                <button className="btn btn-primary btn-lg mx-3">3</button>
                            </div>

                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3">4</button>
                                <button className="btn btn-primary btn-lg mx-3">5</button>
                                <button className="btn btn-primary btn-lg mx-3">6</button>
                            </div>
                            
                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3">7</button>
                                <button className="btn btn-primary btn-lg mx-3">8</button>
                                <button className="btn btn-primary btn-lg mx-3">9</button>
                            </div>

                            <div className="col my-3">
                                <button className="btn btn-primary btn-lg mx-3">0</button>
                                <button className="btn btn-primary btn-lg mx-3">.</button>
                                <button className="btn btn-primary btn-lg mx-3">Clear</button>
                            </div>
                        </div>

                        <div className="col-4 bg-danger-subtle">
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg">+</button>
                            </div>
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg">-</button>
                            </div>
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg">/</button>
                            </div>
                            <div className="row mb-3">
                                <button className="btn btn-primary btn-lg">*</button>
                            </div>                          
                                                                                    
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Calculator;