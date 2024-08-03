import { useLoginAuth } from "../../hooks/useLoginAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-separator";

export default function LoginCard() {
  const { handleSubmit, handleChange } = useLoginAuth();
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            defaultValue=""
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" onChange={handleChange} />
        </div>
      </CardContent>
      <CardFooter>
        <Button id="login" className="w-full" size="lg" onClick={handleSubmit}>
          Login With Email
        </Button>
        <div class="relative translate-y-[1.67rem]">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t border-input"></span>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Separator className="my-5 w-[80%] h-[.5px] bg-input" />
        <Button
          id="google"
          onClick={handleSubmit}
          className="w-full mt-[.7rem]"
          variant="secondary"
          size="lg"
        >
          <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
            <path
              fill="currentColor"
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            ></path>
          </svg>{" "}
          Google
        </Button>
      </CardFooter>
    </Card>
  );
}
