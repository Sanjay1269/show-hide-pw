import { useState } from "react"
import "./Style.css"

function ShowHidePW() {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  return (
    <div>
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-md-7">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              className="w-50"
              alt=""
            />
            <h3>
              Facebook helps you connect and share with the people in your life.
            </h3>
          </div>
          <div className="col-md-5">
            <form className="login-form" action="#">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address or phone number"
                  required
                />
              </div>
              <div className="mb-3 pass-input">
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="button"
                className="btn-custom btn-lg btn-block mt-3"
                onClick={togglePassword}
              >
                Show / Hide Password
              </button>
              <div className="text-center pt-3 pb-3">
                <a href="#" className="">
                  Forgotten password?
                </a>
                <hr />
                <button type="button" className="btn btn-success btn-lg mt-3">
                  Create New Account
                </button>
              </div>
            </form>
            <p className="pt-3 text-center">
              <b>Create a Page</b> for a celebrity, band or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowHidePW
