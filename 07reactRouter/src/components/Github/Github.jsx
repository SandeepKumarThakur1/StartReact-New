// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/SandeepKumarThakur1")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="bg-amber-900 text-white p-4 w-[85%] mx-auto my-5">
        <h1 className="text-2xl font-bold text-center">Github</h1>
        <p className="text-center">Followers : {data.followers}</p>
        <div className="flex justify-center items-center mt-4">
          <img
            src={data.avatar_url}
            alt="github"
            className="w-40 h-40 border rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Github;

export const GithubuserDetails = async () => {
    const response = await fetch("https://api.github.com/users/SandeepKumarThakur1")
    return response.json();
}
