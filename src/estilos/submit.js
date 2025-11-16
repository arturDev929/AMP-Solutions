import styles from './submit.module.css';
function SubmitButton({ value}) {
    return (
        <>
            <button
                className={`btn w-100 ${styles.submitButton}`}
            >
                {value}
            </button>
        </>
        
    );
}
export default SubmitButton;