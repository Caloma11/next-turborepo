import { Button } from 'shared';

export default function Home() {
  return (
    <div>
      <Button />
      <p>{process.env.TITLE || 'LOGIN'}</p>
    </div>
  );
}
