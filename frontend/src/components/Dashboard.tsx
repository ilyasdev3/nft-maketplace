const Dashboard = ({ children }: any) => {
  return (
    <div className="bg-gradient-black-gray text-white pb-[2rem]">
      <div className={` w-[80%] mx-auto`}>{children}</div>
    </div>
  );
};

export default Dashboard;
