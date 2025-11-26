// import style from '../components/header.module.css';

function BtnModal({ value, modal, icon = "bi-person", className = "" }) {
  return (
    <>
        <button className={`btn me-2 ${className}`} data-bs-toggle="modal" data-bs-target={modal}>
            <i className={`bi ${icon} me-1`}></i>
            {value}
        </button>
    </>
  );
}

export default BtnModal;