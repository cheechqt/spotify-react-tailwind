import BaseButton from "components/Base/BaseButton";

function UserProfileButton({ isAuth, email }) {
  if (!isAuth) {
    return (
      <div>
        <BaseButton classes="text-gray-400 hover:text-white" path="/signup">
          Sign up
        </BaseButton>
        <BaseButton primary path="/login">
          Log in
        </BaseButton>
      </div>
    );
  }

  return <div className="text-white">{email}</div>;
}

export default UserProfileButton;
