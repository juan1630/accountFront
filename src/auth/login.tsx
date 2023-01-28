export const LoginPage = () => {
    return (
    <div className="main-login" >
        <header className="header-login" >
            <h1 className="title-login" >Login</h1>
            <p className="p-login" > Inicia sesión con tu email </p>
        </header>
        <section className="section-login" >
            <form className="form-login" >
                <div>
                    <input className="input-login" type="text" name="email"  />
                </div>
                <div>
                    <input className="input-login" type="password"  name="password" />
                </div>
                <div className="button-container-login">
                    <button className="buton-login" > Enviar  </button>
                </div>
            </form>
        </section>

        <footer className="footer-login" > 
            <p> No tienes una centa? <a href="/algo" > Aqui!! </a> </p>
        </footer>
    </div>
)};
// TODO: CAMBIAR EL A POR UN LINK DE REACT ROUTER
