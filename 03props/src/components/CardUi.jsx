const CardUi = ({UserName}) => {
    return (
      <>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-96">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1738090428~exp=1738094028~hmac=6dd30a6d0f41e3c7e9435caac41dad0fcc1bd9d74a7071e252b4f62c96489e79&w=740"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale on large
                teams. It’s easy to customize, adapts to any design, and the build
                size is tiny.”
              </p>
            </blockquote>
            <figcaption>
              <div>{UserName}</div>
              <div>Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </>
    );
  };
  
  export default CardUi;
  