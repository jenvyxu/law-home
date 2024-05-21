const Card = ({ icon, label, ...rest }) => {
  return (
    <div className="p-6 flex flex-col justify-between border-2 border-home rounded-4xl flex-1 mx-12 ">
      <header className="relative w-full flex justify-center items-center before:w-full before:h-1 before:bg-blue-1 -mt-7">
        <img
          src={icon}
          className="w-20 h-20 p-2 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-fill"
        />
      </header>
      <main className="text-4xl  mt-24 text-center font-medium" {...rest}>
        {label}
      </main>
    </div>
  );
};

export default Card;
