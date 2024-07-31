import { FormEvent, useState, useRef, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";
import styled from "styled-components";
import colors from "../styles/colors";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | UserCredential | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const alertMessageBox = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuário está logado
        setUser(user);
        setIsLogged(true);
      } else {
        // Usuário não está logado
        setUser(null);
      }
    });

    // Limpeza da subscrição
    return () => unsubscribe();
  }, []);

  function setAlertMessage(data: { type: string; message: string }) {
    alertMessageBox.current!.style.display = "block";
    alertMessageBox.current!.innerHTML = `<p>${data.message}</p><button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>`;
    alertMessageBox.current!.classList.toggle(
      data.type === "error"
        ? "alert-danger"
        : data.type === "warning"
        ? "alert-warning"
        : data.type === "info"
        ? "alert-info"
        : "alert-success"
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  alert("oi")

    if (!email || !password) {
      setAlertMessage({
        type: "info",
        message: "Preencha todos os campos!",
      });
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        console.log(user);
      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
          setAlertMessage({
            type: "warning",
            message:
              "Esse endereço de e-mail já está em uso. Tente outro. <strong>Se você já tem uma conta conosco</strong>, tente <a href='/login'>fazer login</a>.",
          });
        } else if (error.message.includes("auth/network-request-failed")) {
          setAlertMessage({
            type: "error",
            message:
              "Você está sem conexão com a internet. Tente novamente mais tarde ou atualize a página.",
          });
        } else {
          alert(error.message);
        }
      });
  }

  return (
    <Container>
      <main>
        {isLogged && <Navigate to="/dashboard" replace={true} />}
        <h1>
          Crie sua conta
          <strong>
            <i> Schoolish</i>
          </strong>
        </h1>

        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          ref={alertMessageBox}
          style={{ display: "none" }}
        >
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Senha"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Entrar</button>
        </form>
      </main>
    </Container>
  );
}

export default Page;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & main {
    background-color: ${colors.mainColor};
    padding: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;
