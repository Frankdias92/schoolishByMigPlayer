import { FormEvent, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";
import styled from "styled-components";

function Page() {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("senha");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });

    // Limpeza da subscrição
    return () => unsubscribe();
  }, []);

  function onLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    setPersistence(auth, browserSessionPersistence).then(async () => {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setIsLogged(true);
        })
        .catch((error) => {
          if (error.message.includes("auth/invalid-credential")) {
            alert("Credenciais inválidas!");
          } else if (error.message.includes("auth/user-not-found")) {
            alert("Usuário não encontrado!");
          } else {
            alert(error.message);
          }
        });
    });
  }

  return (
    <Login>
      {isLogged && <Navigate to="/dashboard" replace={true} />}
      <div className="form-structor">
        <div className="signup">
          <h2 className="form-title" id="signup">
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input
              type="email"
              className="input"
              placeholder="Email"
              onInput={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              onInput={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
          </div>
          <button className="submit-btn">Sign up</button>
        </div>
        <div className="login slide-up">
          <form className="center" onSubmit={onLogin}>
            <h2 className="form-title" id="login">
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
              <input
                type="email"
                className="input"
                placeholder="Email"
                onInput={(e) => setEmail(e.currentTarget.value)}
                value={email}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                onInput={(e) => setPassword(e.currentTarget.value)}
                value={password}
              />
            </div>
            <button className="submit-btn">Log in</button>
          </form>
        </div>
      </div>
    </Login>
  );
}

export default Page;

const Login = styled.main`
  .form-structor {
    background-color: #222;
    border-radius: 15px;
    height: 550px;
    width: 350px;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      opacity: 0.8;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: left bottom;
      background-size: 500px;
      background-image: url("https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100");
    }

    .signup {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 65%;
      z-index: 5;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;

      &.slide-up {
        top: 5%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
      }

      &.slide-up .form-title {
        font-size: 1em;
        cursor: pointer;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .form-title {
        color: #fff;
        font-size: 1.7em;
        text-align: center;

        span {
          color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
      }

      .form-holder {
        border-radius: 15px;
        background-color: #fff;
        overflow: hidden;
        margin-top: 50px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .input {
          border: 0;
          outline: none;
          box-shadow: none;
          display: block;
          height: 30px;
          line-height: 30px;
          padding: 8px 15px;
          border-bottom: 1px solid #eee;
          width: 100%;
          font-size: 12px;

          &:last-child {
            border-bottom: 0;
          }
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }

      .submit-btn {
        background-color: rgba(0, 0, 0, 0.4);
        color: rgba(256, 256, 256, 0.7);
        border: 0;
        border-radius: 15px;
        display: block;
        margin: 15px auto;
        padding: 15px 45px;
        width: 100%;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        &:hover {
          transition: all 0.3s ease;
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
    }

    .login {
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 5;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -20px;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        background-color: #fff;
        width: 200%;
        height: 250px;
        border-radius: 50%;
        z-index: 4;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      .center {
        position: absolute;
        top: calc(50% - 10%);
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 65%;
        z-index: 5;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .form-title {
          color: #000;
          font-size: 1.7em;
          text-align: center;

          span {
            color: rgba(0, 0, 0, 0.4);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }
        }

        .form-holder {
          border-radius: 15px;
          background-color: #fff;
          border: 1px solid #eee;
          overflow: hidden;
          margin-top: 50px;
          opacity: 1;
          visibility: visible;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;

          .input {
            border: 0;
            outline: none;
            box-shadow: none;
            display: block;
            height: 30px;
            line-height: 30px;
            padding: 8px 15px;
            border-bottom: 1px solid #eee;
            width: 100%;
            font-size: 12px;

            &:last-child {
              border-bottom: 0;
            }
            &::-webkit-input-placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }

        .submit-btn {
          background-color: #6b92a4;
          color: rgba(256, 256, 256, 0.7);
          border: 0;
          border-radius: 15px;
          display: block;
          margin: 15px auto;
          padding: 15px 45px;
          width: 100%;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;

          &:hover {
            transition: all 0.3s ease;
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      }

      &.slide-up {
        top: 90%;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .center {
        top: 10%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-title {
        font-size: 1em;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }
    }
  }
`;
