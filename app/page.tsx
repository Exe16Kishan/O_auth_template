import { SignIn } from "./components/signin";
import { SignOut } from "./components/signout";

export default async function Home() {
  return (
    <div>
      <SignIn />
      <SignOut />
    </div>
  );
}
