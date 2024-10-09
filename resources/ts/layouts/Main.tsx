import React, { ReactNode, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Notification from "../components/Notification"
import Chat from "../components/Chat/Chat"
import Footer from "../components/Footer"

// Define interface props
interface MainProps {
    children: ReactNode
}

// Define window type as any to prevent error linter
declare const window: any;

const Main: React.FC<MainProps> = ({ children }) => {

    useEffect(() => {
        // Initialize all theme components functionality
        window.KTComponents.init()

        // Change layout classes
        var bodyClass = ['header-fixed', 'header-tablet-and-mobile-fixed', 'aside-fixed', 'aside-secondary-enabled']
        document.body.classList.forEach(cls => {
            document.body.classList.remove(cls)
        })
        bodyClass.forEach(cls => {
            document.body.classList.add(cls)
        })
        document.body.classList.remove('auth-layout')
        document.body.classList.add('main-layout')

        /* CHAT DRAWER */
        var chatEl = document.querySelector("#kt_drawer_chat")
        var chatDrawer = window.KTDrawer.getInstance(chatEl)
        // Handle on open
        chatDrawer.on("kt.drawer.shown", function () {
            console.log('Chat drawer opened')
        })
        // Handle on open
        chatDrawer.on("kt.drawer.after.hidden", function () {
            console.log('Chat drawer closed')
        })
    }, [])

    // Define addon button to inject on header
    const headerAddonButton = <a href="/"
        className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6">
        <i className="ki-duotone ki-plus fs-2 text-primary me-0 me-md-2" />
        <span className="d-none d-md-inline">Addon Button</span>
    </a>

    return <>
        <div className="d-flex flex-column flex-root">
            <div className="page d-flex flex-row flex-column-fluid">
                <Sidebar></Sidebar>
                <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    <Header slot={headerAddonButton}></Header>
                    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                        <div className="container-xxl" id="kt_content_container">
                            {children}
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>

        <Notification></Notification>
        <Chat></Chat>
    </>

}

export default Main;
