import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const page = async () => {
  console.log("Hello world");
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="h1-bold font-inter">Hello world</h1>
      <form className="px-10 pt-[100px]"
      action={async () => {
        "use server";
        await signOut({
          redirectTo:ROUTES.SIGN_IN});
        }}>
          <Button type="submit">Log Out</Button>
        
      </form>
    
      

    </div>
  );
};

export default page;
