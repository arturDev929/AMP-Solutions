import style from './modal.module.css';
import InputField from './inputs';
import SubmitButton from './submit';
function Modal() {
    return (
        <>
          <div className="modal fade" id="ModalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className={`modal-content ${style.modal}`}>
                <div className="modal-header">
                  <h1 className= {`modal-title fs-5 ${style.logintxt}`} id="exampleModalLabel">Bem-vindo Novamente</h1>
                  <button type="button" className={`btn-close ${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <InputField label="Email" type="email" placeholder="Insira o seu Email" />
                  <InputField label="Senha" type="password" placeholder="Digite a sua senha" />
                </div>
                <div class="modal-footer">
                  <SubmitButton value="Entrar"/>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="modalServiceWeb" tabindex="-1" aria-labelledby="modalServiceLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className={`modal-content ${style.modal}`}>
                <div className="modal-header">
                  <h1 className={`modal-title fs-5 ${style.logintxt}`} id="modalServiceLabel">Solicitar Serviço de Desenvolvimento Web</h1>
                  <button type="button" className={`btn-close ${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {/* <InputField label="text" type="text" placeholder="text" />
                  <InputField label="email" type="email" placeholder="email" />
                  <InputField label="password" type="password" placeholder="password" />
                  <InputField label="number" type="number" placeholder="number" />
                  <InputField label="tel" type="tel" placeholder="tel" />
                  <InputField label="url" type="url" placeholder="url" />
                  <InputField label="date" type="date" placeholder="date" />
                  <InputField label="time" type="time" placeholder="time" />
                  <InputField label="search" type="search" placeholder="search" />
                  <InputField label="file" type="file" placeholder="file" />
                  <InputField label="checkbox" type="checkbox" placeholder="checkbox" />
                  <InputField label="radio" type="radio" placeholder="radio" />
                  <InputField label="range" type="range" placeholder="range" />
                  <InputField label="color" type="color" placeholder="color" /> */}
                </div>
                <div className="modal-footer">
                  <SubmitButton value="Solicitar"/>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="modalServiceMobile" tabindex="-1" aria-labelledby="modalServiceLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className={`modal-content ${style.modal}`}>
                <div className="modal-header">
                  <h1 className={`modal-title fs-5 ${style.logintxt}`} id="modalServiceLabel">Solicitar Aplicação Mobile</h1>
                  <button type="button" className={`btn-close ${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {/* <InputField label="Email" type="email" placeholder="Insira o seu Email" />
                  <InputField label="Senha" type="password" placeholder="Digite a sua senha" /> */}
                </div>
                <div className="modal-footer">
                  <SubmitButton value="Solicitar"/>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default Modal;