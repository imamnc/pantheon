import React, { useState } from "react";
import { Link } from "@inertiajs/react";

interface GreetProps {
    name?: string
}

const Greet: React.FC<GreetProps> = (props) => {

    const [name, setName] = useState(props.name)

    const reset = () => {
        setName('')
    }

    return <>
        <div className="row justify-content-center animate__animated animate__fadeIn">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body py-5">
                        <h1 className="m-0 mb-2">Hello, <span className="text-primary">{name}</span></h1>
                        <span className="text-dark">How's your day? I hope it's been a great day</span>
                        <div className="row mt-7">
                            <div className="col-6">
                                <div className="d-flex">
                                    <input type="text" className="form-control text-center" placeholder="Type custom name..." value={name} onChange={(e) => setName(e.target.value)} />
                                    <button className="btn btn-danger ms-2" onClick={() => reset()}>Reset</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7"><Link href="/dashboard" className="btn btn-secondary">Bring Me Back</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Greet;
