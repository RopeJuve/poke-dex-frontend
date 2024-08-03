
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginCard from "../Cards/LoginCard";
import SingUpCard from "../Cards/SingUpCard";

export default function LogInForm() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="singup">Sing Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginCard />
      </TabsContent>
      <TabsContent value="singup">
        <SingUpCard />
      </TabsContent>
    </Tabs>
  );
}
