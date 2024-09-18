import { signIn } from "@/auth"
import github from "next-auth/providers/github"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github",{redirectTo:"/dashboard",redirect:true})
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  )
}