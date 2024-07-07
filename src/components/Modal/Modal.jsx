import classes from './Modal.module.css';

export const Modal = ({isOpen, onClose, children}) => {
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