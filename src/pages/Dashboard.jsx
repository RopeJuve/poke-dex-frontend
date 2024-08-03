import { Card, CardTitle } from "@/components/ui/card";
import ProfileImg from "@/components/ProfileImg/ProfileImg";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl text-center font-bold tracking-widest">
        Dashboard
      </h1>

      <Card className="flex flex-col gap-[2rem] mt-[2rem] w-[15rem] p-6 mx-auto items-center">
        <CardTitle className="tracking-wider font-semibold">Profile</CardTitle>
        <ProfileImg />
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-bold tracking-wider">Name:</span>{" "}
            {user?.first_name} {user?.last_name}
          </p>
          <p>
            <span className="font-bold tracking-wider">Email:</span>{" "}
            {user?.email}
          </p>
        </div>
      </Card>
    </div>
  );
}
