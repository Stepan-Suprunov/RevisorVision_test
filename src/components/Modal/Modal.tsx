import classes from './Modal.module.css';
import React from "react";


type Props = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
};

export const Modal: React.FC<Props> = ({isOpen, onClose, children}) => {
    return (
        <>
            {isOpen && (
                <div className={classes.modal}>
                    <div className={classes.modalWrapper}>
                        <button className={classes.modalCloseButton}
                                onClick={() => onClose()}>
                            &#10006;
                        </button>
                        <div className={classes.modalContent}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};