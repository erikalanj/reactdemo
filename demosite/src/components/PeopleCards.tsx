const PeopleCards = () => {
  return (
    <div className="p-4">
      <div className="bg-blue-500 p-4 rounded shadow-md">
        <div className="text-sm font-bold">Alice </div>
        <div className="text-sm">Age: 30</div>
        <div className="bg-blue-500 p-4 rounded shadow-md">
          <div className="text-sm font-bold">Bob </div>
          <div className="text-sm">Age: 25</div>
        </div>
        <div className="bg-blue-500 p-4 rounded shadow-md">
          <div className="text-sm font-bold">Charlie </div>
          <div className="text-sm">Age: 20</div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCards;
