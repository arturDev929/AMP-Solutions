import style from '../components/header.module.css';
function BtnModal() {
  return (
    <>
        <button className={`btn me-2 ${style.login}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-person me-1"></i>
            Entrar
        </button>
    </>
  );
}
export default BtnModal;