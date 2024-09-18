import { auth } from "@/auth";
import { SignIn } from "./components/signin";
import { SignOut } from "./components/signout";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <SignIn />
      <SignOut />
    </div>
  );
}
