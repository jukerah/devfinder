import { NotFound } from '../NotFound';

export const ProfileCard = (props) => {
  if (props.notFound) return <NotFound />
  else {
    return (
      <>
        <p>{props.user['login']}</p>
      </>
    );
  }
}
