import FormField from '../../pure/Login/FormField';
import FormCheck from '../../pure/Login/FormCheck';
import './Layout.css';
import Button from '../../pure/Login/button';


function Layout({ children, title, ...props }) {
  return (
    <div className="layout">
      <div class="layout1">
        <main className="layout-main">
          <h2 className="layout-title "> OpenBootcamp <span className="Alumno"> | Alumnos</span></h2>
          <FormField
            type="text"
            name="email"
            label="Email"
            className="loginForm-field"
            placeholder="Introduce tu correo"
            autofocus
          />
          <FormField
            type="text"
            name="email"
            label="Contraseña"
            className="loginForm-field"
            placeholder="Introduce tu contraseña"
            autofocus
          />
          <div class="Check">
            <div>
              <FormCheck
                type="checkbox"
                name="remember"
                id="remember"
                className="formcheck-input"
                label="Recuerdame"
              />
            </div>
            <div>
              <a href=""> He Olvidado la Contraseña</a>
            </div>



          </div>
          <Button className='button-text'>
            Iniciar Sesión
          </Button>

          <footer className="layout-footer">
            <div>
              <h4> Copyright © 2021 Open Bootcamp SL, Imagina Group         </h4>
              <h4>
                Todos los derechos reservados.
            </h4>
              <h4> Política de Privacidad</h4>
            </div>


          </footer>
        </main>
      </div>
      <div class="layout2">

      </div>
    </div>
  );
}
export default Layout;