/* eslint-disable max-len */
import Form from '../components/Form';

function Register() {
  const fields = [
    { id: 'name', label: 'Name', name: 'name', type: 'text' },
    { id: 'cpf', label: 'CPF', name: 'cpf', type: 'text' },
    { id: 'email', label: 'Email', name: 'email', type: 'email' },
    { id: 'phone', label: 'Phone', name: 'phone', type: 'tel' },
    { id: 'password', label: 'Password', name: 'password', type: 'password' },
    { id: 'confirm-password', label: 'Confirm Password', name: 'confirm-password', type: 'password' },
  ];

  return (
    <Form
      fields={ fields }
      buttonText="Register"
      authPromptText="Already have an account?"
      authPromptLinkText="Login"
      authPromptLinkTo="/"
    />
  );
}

export default Register;
