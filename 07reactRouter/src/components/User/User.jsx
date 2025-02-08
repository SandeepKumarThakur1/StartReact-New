import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <div className="bg-amber-950 text-white py-5 w-[80%] mx-auto my-5">
        <h1 className="text-4xl font-bold text-center">User : {userId} </h1>
      </div>
    </>
  );
};

export default User;
