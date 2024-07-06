import classes from './Modal.module.css';

export const Modal = ({isOpen, onClose, children}) => {
    return (
        <>
            {isOpen && (
                <div className={classes.modal}>
                    <div className={classes.modalWrapper}>
                        <div className={classes.modalContent}>
                            <button className={classes.modalCloseButton}
                                    onClick={() => onClose()}>
                                X
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};