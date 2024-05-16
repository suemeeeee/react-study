import Link from "next/link";

const Home = () => {
  return (
    <div className="flex w-full justify-center">
      <Link
        href={"/react/optimisticupdate"}
        className="m-4 py-4 px-8 bg-pink-100 rounded-lg"
      >
        optimisticUpdate
      </Link>
    </div>
  );
};

export default Home;
