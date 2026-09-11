import React, { useEffect, useState } from "react";
import "./Faculty.css";

function Faculty() {

  const message = "Welcome Faculty";

  const [text, setText] = useState(message);
  const [moveDuster, setMoveDuster] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  const [page, setPage] = useState("portal");

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [signupData, setSignupData] = useState({
    name: "",
    id: "",
    email: "",
    department: "",
    subject: "",
    branch: "",
    password: ""
  });

  // Blackboard animation
  useEffect(() => {

    const startTimer = setTimeout(() => {

      setMoveDuster(true);

      let index = 0;

      const eraseTimer = setInterval(() => {

        index++;

        setText(message.substring(index));

        if (index >= message.length) {

          clearInterval(eraseTimer);

          setTimeout(() => {
            setShowPortal(true);
          }, 500);
        }

      }, 120);

    }, 2000);

    return () => clearTimeout(startTimer);

  }, []);


  // LOGIN
  function handleLogin(e) {

    e.preventDefault();

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    if (!emailPattern.test(loginData.email)) {
      alert("Enter a valid faculty email.");
      return;
    }

    if (!passwordPattern.test(loginData.password)) {
      alert(
        "Password must contain at least 8 characters, one capital letter and one number."
      );
      return;
    }

    alert("Login successful!");

  }


  // SIGN UP
  function handleSignup(e) {

    e.preventDefault();

    if (
      !signupData.name ||
      !signupData.id ||
      !signupData.email ||
      !signupData.department ||
      !signupData.subject ||
      !signupData.branch ||
      !signupData.password
    ) {
      alert("Please fill all the details.");
      return;
    }

    alert(
      "Faculty registration request sent to HOD/Admin for approval."
    );

    // After submitting, return to access page
    setPage("portal");

  }


  return (

    <div className="faculty-page">

      <h1 className="faculty-title">
        EduLentra Faculty Portal
      </h1>


      <div className="faculty-blackboard">

        {!showPortal ? (

          <>
            <div className="faculty-chalk-text">
              {text}
            </div>

            <div
              className={`faculty-duster ${
                moveDuster ? "move" : ""
              }`}
            ></div>

            <div className="faculty-chalk-tray">

              <div className="faculty-chalk"></div>

            </div>
          </>

        ) : (

          <>

            {/* MAIN ACCESS */}
            {page === "portal" && (

              <div className="faculty-portal">

                <h2>Faculty Access</h2>

                <button
                  className="faculty-portal-btn"
                  onClick={() => setPage("login")}
                >
                  Login
                </button>

                <button
                  className="faculty-portal-btn"
                  onClick={() => setPage("signup")}
                >
                  Sign Up
                </button>

              </div>

            )}


            {/* LOGIN */}
            {page === "login" && (

              <div className="faculty-portal">

                <h2>Faculty Login</h2>

                <form onSubmit={handleLogin}>

                  <input
                    type="email"
                    placeholder="Faculty Email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        email: e.target.value
                      })
                    }
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value
                      })
                    }
                  />

                  <button
                    className="faculty-portal-btn"
                    type="submit"
                  >
                    Login
                  </button>

                </form>

                <p className="faculty-switch-text">
                  Don't have an account?
                  <button
                    className="faculty-link-btn"
                    onClick={() => setPage("signup")}
                  >
                    Sign Up
                  </button>
                </p>

                <button
                  className="faculty-back-btn"
                  onClick={() => setPage("portal")}
                >
                  ← Back
                </button>

              </div>

            )}


            {/* SIGN UP */}
            {page === "signup" && (

              <div className="faculty-portal signup-portal">

                <h2>Faculty Registration</h2>

                <form onSubmit={handleSignup}>

                  <input
                    type="text"
                    placeholder="Faculty Name"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        name: e.target.value
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Faculty ID"
                    value={signupData.id}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        id: e.target.value
                      })
                    }
                  />

                  <input
                    type="email"
                    placeholder="Faculty Email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        email: e.target.value
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Department"
                    value={signupData.department}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        department: e.target.value
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Subject / Subjects Handled"
                    value={signupData.subject}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        subject: e.target.value
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Class / Branch Handled"
                    value={signupData.branch}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        branch: e.target.value
                      })
                    }
                  />

                  <input
                    type="password"
                    placeholder="Create Password"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        password: e.target.value
                      })
                    }
                  />

                  <button
                    className="faculty-portal-btn"
                    type="submit"
                  >
                    Send Request
                  </button>

                </form>


                <p className="faculty-switch-text">
                  Already have an account?

                  <button
                    className="faculty-link-btn"
                    onClick={() => setPage("login")}
                  >
                    Login
                  </button>
                </p>

                <button
                  className="faculty-back-btn"
                  onClick={() => setPage("portal")}
                >
                  ← Back
                </button>

              </div>

            )}

          </>

        )}

      </div>

    </div>
  );
}

export default Faculty;