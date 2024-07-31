import { FormEvent, useState, useEffect } from 'react'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged, User, UserCredential } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '../services/firebase'

function Page() {
    const [email, setEmail] = useState('email')
    const [password, setPassword] = useState('senha')
    const [user, setUser] = useState<User | UserCredential | null>(null)
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLogged(true);
            } else {
                setUser(null);
            }
        });

        // Limpeza da subscrição
        return () => unsubscribe();
    }, []);

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!email || !password) {
            alert('Preencha todos os campos!');
            return;
        }

        setPersistence(auth, browserSessionPersistence)
            .then(async () => {
                await signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        setUser(userCredential)
                        console.log(userCredential)
                    })
                    .catch((error) => {
                        if (error.message.includes("auth/invalid-credential")) {
                            alert("Credenciais inválidas!")
                        }
                    })
            })

    }

    return (
        <>
            {isLogged && (
                <Navigate to="/dashboard" replace={true} />
            )}
            <h1>Crie sua conta
                <strong><i> Schoolish</i></strong>
            </h1>

            <form onSubmit={onSubmit}>
                <input type="email" placeholder="Email" onInput={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }} />
                <br />
                <input type="password" placeholder="Senha" onInput={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }} />
                <br /><br />
                <button type="submit">Entrar</button>
            </form>
        </>)
}

export default Page