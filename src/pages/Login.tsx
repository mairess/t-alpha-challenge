/* eslint-disable max-len */
import Form from '../components/Form';

function Login() {
  const fields = [
    { id: 'cpf', label: 'CPF', name: 'cpf', type: 'text' },
    { id: 'password', label: 'Password', name: 'password', type: 'password' },
  ];

  return (
    <Form
      fields={ fields }
      buttonText="Login"
      authPromptText="Don't have an account?"
      authPromptLinkText="Register"
      authPromptLinkTo="/register"
    />
  );
}

export default Login;
