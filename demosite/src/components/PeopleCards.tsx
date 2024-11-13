import React from "react";

interface PersonCardPropsP {
  name: string;
  age: number;
}

const PersonCard: React.FC<PersonCardPropsP> = ({ name, age }) => {
  return (
    <div className="bg-blue-500 p-4 rounded shadow-md">
      <div className="text-sm font-bold">{name} </div>
      <div className="text-sm">Age: {age}</div>
    </div>
  );
};

const PeopleCards = () => {
  return (
    <div className="p-4">
      <PersonCard name="Alice" age={30} />
      <PersonCard name="Alice" age={30} />
      <PersonCard name="Alice" age={30} />
    </div>
  );
};

export default PeopleCards;
