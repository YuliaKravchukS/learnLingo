import Button from "../../ui/Button/Button";
import { useAuth } from "../../context/auth-context";

const UserMenu = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <p>Welcome, {user?.displayName}</p>
      <Button
        className='logOut'
        type='button'
        cb={() => {
          signOut();
        }}
        text='Log out'
      />
    </div>
  );
};

export default UserMenu;
