import { Link } from 'react-router-dom';

/* eslint-disable max-len */
type AuthPromptProps = {
  text: string,
  linkText: string,
  linkTo: string
};

function AuthPrompt({ text, linkText, linkTo }: AuthPromptProps) {
  return (

    <p className="text-center text-text-secondary-light dark:text-text-secondary-dark">

      {text}
      {' '}

      <Link className="font-bold text-link-light dark:text-link-dark hover:underline" to={ linkTo }>

        {linkText}

      </Link>

    </p>

  );
}

export default AuthPrompt;
