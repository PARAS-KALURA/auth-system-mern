const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-2xl font-bold mb-4">
          Welcome, Paras 👋
        </h1>

        <p className="text-gray-600">Username: Paras Kalura</p>
        <p className="text-gray-600 mb-6">Email: paras@email.com</p>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>

      </div>
    </div>
  );
};

export default Dashboard;