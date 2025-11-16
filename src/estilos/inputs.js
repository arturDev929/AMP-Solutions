import styles from './inputs.module.css'
function InputField({ label, type, value}) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                type={type}
                className={`form-control border-0 rounded ${styles.input}`}
                placeholder={value}
            />
        </div>
    );
}
export default InputField;