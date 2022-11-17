interface Title {
  title: string;
}

function Title({ title }: Title) {
  return (
    <div className="flex justify-center my-8">
      <h2 className="text-4xl text-center text-[#7B7B7B] font-bold">
        {title}
        <div className="mt-4 bg-[#643736] border-2 border-[#643736] w-24 mx-auto" />
      </h2>
    </div>
  );
}

export default Title;
