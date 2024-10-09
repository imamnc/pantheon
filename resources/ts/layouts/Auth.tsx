import React, { ReactNode, useEffect } from "react"
import '../../css/app.css'

// Define interface props
interface AuthProps {
    children: ReactNode
}

// Define window type as any to prevent error linter
declare const window: any;

const Auth: React.FC<AuthProps> = ({ children }) => {

    useEffect(() => {
        // Initialize all theme components functionality
        window.KTComponents.init()
        // Change body background
        var bodyClass = ['auth-bg', 'bgi-size-cover', 'bgi-attachment-fixed', 'bgi-position-center', 'bgi-no-repeat']
        document.body.classList.forEach(cls => {
            document.body.classList.remove(cls)
        })
        bodyClass.forEach(cls => {
            document.body.classList.add(cls)
        })
        document.body.classList.remove('main-layout')
        document.body.classList.add('auth-layout')
    }, [])

    return <>
        <div className="d-flex flex-column flex-root">
            <div className="d-flex flex-column flex-column-fluid flex-lg-row">
                <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
                    <div className="d-flex flex-center flex-lg-start flex-column">
                        <a href="../../demo7/dist/index.html" className="mb-7">
                            <img alt="Logo" src="/assets/media/logos/custom-3.svg" />
                        </a>
                        <h2 className="text-white fw-normal m-0">
                            Branding tools designed for your business
                        </h2>
                    </div>
                </div>
                <div
                    className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
                    {children}
                </div>
            </div>
        </div>
    </>

}

export default Auth;
