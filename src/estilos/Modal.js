import style from '../components/header.module.css';
import InputField from './inputs';
import SubmitButton from './submit';
function Modal() {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className={`modal-content ${style.modal}`}>
            <div className="modal-header">
              <h1 className= {`modal-title fs-5 ${style.logintxt}`} id="exampleModalLabel">Bem-vindo Novamente</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <InputField label="Email" type="email" placeholder="Insira o seu Email" />
              <InputField label="Senha" type="password" placeholder="Digite a sua senha" />
              <SubmitButton value="Entrar"/>
            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */} 
          </div>
        </div>
      </div>
        </>
    )
}
export default Modal;