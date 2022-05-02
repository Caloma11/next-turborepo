import { Button } from 'shared';

export default function Home() {
  const loginTitle = () => {
    return process.env.NEXT_PUBLIC_LOGIN_TITLE;
  };

  return (
    <div>
      <Button />
      <p>{loginTitle()}</p>
    </div>
  );
}

// com
