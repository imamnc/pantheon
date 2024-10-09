import React from "react";
import { Link, usePage } from "@inertiajs/react";

interface HomeProps { }

const StorageIndex: React.FC<HomeProps> = () => {

    // Get page props
    const { props }: any = usePage()

    // Define data sample
    const framework: string = "Pantheon"
    const laravel: string = "Laravel"
    const react: string = "React"
    const language: string = "Typescript"

    return <>
        <div className="row justify-content-center animate__animated animate__fadeIn">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body py-5">
                        <h1 className="mb-7">
                            <span className="me-2">
                                Hello <strong className="text-primary">{props.auth.user.name}</strong>,
                            </span>
                            <p className="mt-4">
                                <span>Welcome to STORAGE!</span>
                            </p>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default StorageIndex;
