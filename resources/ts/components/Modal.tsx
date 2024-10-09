import clsx from "clsx";
import React from "react"

interface ModalProps {
    children: any;
    isOpen: boolean,
    tabIndex?: any,
    id?: string
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, tabIndex, id, ...otherProps }) => {

    return <>
        <div className={clsx(
                'modal animate__animated',
                {'animate__fadeIn': isOpen},
                {'animate__bounceOut': !isOpen}
            )}
            tabIndex={tabIndex}
            id={id}
            style={{ display: isOpen ? 'block' : 'none', background: 'rgba(0, 0, 0, 0.5)' }}
            aria-modal={isOpen}
            role="dialog"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    </>
}

export default Modal
