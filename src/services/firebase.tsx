import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLNRhky8snqJ4QXB31Sa9sIvD3DiIkBwo",
  authDomain: "schoolish-official.firebaseapp.com",
  projectId: "schoolish-official",
  storageBucket: "schoolish-official.appspot.com",
  messagingSenderId: "510922615291",
  appId: "1:510922615291:web:cf12894c2209f700b9435e",
  measurementId: "G-N0JH48SBJX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const hooks = {
  getUserData: () => auth.currentUser || null,
};

// Emulador do Firebase
const hostname = window.location.hostname;
const localIPs = ["localhost", "127.0.0.1", "::1"];

const localIPRegex =
  /^(?:192\.168|10|172\.(?:1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}$/;
if (localIPs.includes(hostname) || localIPRegex.test(hostname)) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export { app, auth, analytics, hooks, errors };

const errors = {
  auth: {
    "auth/admin-restricted-operation":
      "Esta operação é restrita a administradores.",
    "auth/argument-error": "Argumentos inválidos fornecidos.",
    "auth/app-not-authorized":
      "Este aplicativo não está autorizado a usar o Firebase.",
    "auth/app-not-installed":
      "Este aplicativo não está instalado no seu dispositivo.",
    "auth/captcha-check-failed": "A verificação do Google reCAPTCHA falhou.",
    "auth/code-expired": "O código fornecido expirou.",
    "auth/cordova-not-ready": "O Cordova não está pronto.",
    "auth/cors-unsupported": "O CORS não é suportado pelo seu navegador.",
    "auth/credential-already-in-use":
      "Esta credencial já está associada a outra conta.",
    "auth/custom-token-mismatch":
      "O token personalizado e a chave da API não match.",
    "auth/requires-recent-login":
      "Faça login novamente, pois seu último login foi há muito tempo.",
    "auth/dependent-sdk-initialized-before-auth":
      "Inicialize o Firebase Auth SDK antes de outros SDKs dependentes.",
    "auth/dynamic-link-not-activated": "Links dinâmicos não estão ativados.",
    "auth/email-change-needs-verification":
      "Verifique seu novo endereço de e-mail.",
    "auth/email-already-in-use": "O endereço de e-mail já está em uso.",
    "auth/emulator-config-failed": "Falha na configuração do emulador.",
    "auth/expired-action-code": "O código de ação expirou.",
    "auth/cancelled-popup-request": "A solicitação de pop-up foi cancelada.",
    "auth/internal-error": "Ocorreu um erro interno.",
    "auth/invalid-api-key": "A chave de API fornecida é inválida.",
    "auth/invalid-app-credential": "A credencial do aplicativo é inválida.",
    "auth/invalid-app-id": "O ID do aplicativo é inválido.",
    "auth/invalid-user-token": "Token de usuário inválido.",
    "auth/invalid-auth-event": "Evento de autenticação inválido.",
    "auth/invalid-cert-hash": "Hash de certificado inválido.",
    "auth/invalid-verification-code":
      "O código de verificação fornecido é inválido.",
    "auth/invalid-continue-uri": "A URL de continuação é inválida.",
    "auth/invalid-cordova-configuration": "Configuração do Cordova inválida.",
    "auth/invalid-custom-token": "O token personalizado é inválido.",
    "auth/invalid-dynamic-link-domain":
      "O domínio do link dinâmico é inválido.",
    "auth/invalid-email": "Endereço de e-mail inválido.",
    "auth/invalid-emulator-scheme": "Esquema de emulador inválido.",
    "auth/invalid-credential": "Resposta do provedor de identidade inválida.",
    "auth/invalid-message-payload": "Carga útil da mensagem inválida.",
    "auth/invalid-multi-factor-session":
      "Sessão de autenticação multifator inválida.",
    "auth/invalid-oauth-client-id": "ID do cliente OAuth inválido.",
    "auth/invalid-oauth-provider": "Provedor OAuth inválido.",
    "auth/invalid-action-code":
      "O código de ação de redefinição de senha é inválido.",
    "auth/unauthorized-domain": "Não autorizado domínio.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/invalid-persistence-type": "Tipo de persistência inválido.",
    "auth/invalid-phone-number": "Número de telefone inválido.",
    "auth/invalid-provider-id": "ID do provedor inválido.",
    "auth/invalid-recipient-email": "E-mail do destinatário inválido.",
    "auth/invalid-sender": "Remetente inválido.",
    "auth/invalid-verification-id": "ID de verificação inválido.",
    "auth/invalid-tenant-id": "ID do locatário inválido.",
    "auth/multi-factor-info-not-found":
      "Informações de autenticação multifator não encontradas.",
    "auth/multi-factor-auth-required":
      "A autenticação multifator é necessária.",
    "auth/missing-android-pkg-name": "Nome do pacote Android ausente.",
    "auth/missing-app-credential": "Credencial do aplicativo ausente.",
    "auth/auth-domain-config-required":
      "Configuração do domínio de autenticação ausente.",
    "auth/missing-verification-code": "Código de verificação ausente.",
    "auth/missing-continue-uri": "URL de continuação ausente.",
    "auth/missing-iframe-start": "Início do iframe ausente.",
    "auth/missing-ios-bundle-id": "ID do pacote iOS ausente.",
    "auth/missing-or-invalid-nonce": "Nonce ausente ou inválido.",
    "auth/missing-multi-factor-info":
      "Informações de autenticação multifator ausentes.",
    "auth/missing-multi-factor-session":
      "Sessão de autenticação multifator ausente.",
    "auth/missing-phone-number": "Número de telefone ausente.",
    "auth/missing-verification-id": "ID de verificação ausente.",
    "auth/app-deleted": "O módulo de autenticação foi excluído.",
    "auth/account-exists-with-different-credential":
      "Uma conta com este e-mail já existe com uma credencial diferente.",
    "auth/network-request-failed": "Uma solicitação de rede falhou.",
    "auth/null-user": "Nenhum usuário está conectado no momento.",
    "auth/no-auth-event": "Nenhum evento de autenticação.",
    "auth/no-such-provider": "Nenhum Provedor de Identidade.",
    "auth/operation-not-allowed": "Esta operação não é permitida.",
    "auth/operation-not-supported-in-this-environment":
      "Esta operação não é suportada em seu ambiente atual.",
    "auth/popup-blocked": "Popup bloqueado pelo navegador.",
    "auth/popup-closed-by-user": "Popup fechado pelo usuário.",
    "auth/provider-already-linked":
      "Este provedor já está vinculado à sua conta.",
    "auth/quota-exceeded": "Cota excedida.",
    "auth/redirect-cancelled-by-user":
      "Redirecionamento cancelado pelo usuário.",
    "auth/redirect-operation-pending":
      "A operação de redirecionamento está pendente.",
    "auth/rejected-credential": "Credencial rejeitada.",
    "auth/second-factor-already-in-use":
      "Método de autenticação de segundo fator já em uso.",
    "auth/maximum-second-factor-count-exceeded":
      "Número máximo de métodos de segundo fator excedido.",
    "auth/tenant-id-mismatch": "Incompatibilidade de ID do locatário.",
    "auth/timeout": "Ocorreu um tempo limite.",
    "auth/user-token-expired": "O token do usuário expirou.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
    "auth/unauthorized-continue-uri": "Não autorizado continuar URL.",
    "auth/unsupported-first-factor":
      "Método de autenticação de primeiro fator não suportado.",
    "auth/unsupported-persistence-type": "Tipo de persistência não suportado.",
    "auth/unsupported-tenant-operation": "Operação de locatário não suportada.",
    "auth/unverified-email": "Endereço de e-mail não verificado.",
    "auth/user-cancelled": "O usuário cancelou a autenticação.",
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/user-disabled": "A conta do usuário está desabilitada.",
    "auth/user-mismatch": "Incompatibilidade de usuário.",
    "auth/user-signed-out": "O usuário saiu.",
    "auth/weak-password": "A senha é fraca.",
    "auth/web-storage-unsupported":
      "O armazenamento na Web não é suportado pelo seu navegador.",
    "auth/already-initialized": "O Firebase Auth já foi inicializado.",
    "auth/recaptcha-not-enabled": "O Google reCAPTCHA não está habilitado.",
    "auth/missing-recaptcha-token": "Token Google reCAPTCHA ausente.",
    "auth/invalid-recaptcha-token": "Token Google reCAPTCHA inválido.",
    "auth/invalid-recaptcha-action": "Ação Google reCAPTCHA inválida.",
    "auth/missing-client-type": "Tipo de cliente ausente.",
    "auth/missing-recaptcha-version": "Versão Google reCAPTCHA ausente.",
    "auth/invalid-recaptcha-version": "Versão Google reCAPTCHA inválida.",
    "auth/invalid-req-type": "Solicitação inválida tipo.",
  },
};
