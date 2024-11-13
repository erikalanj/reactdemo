import React from "react";
import peopleData from "@/data/test2.json";

interface PersonCardPropsP {
  name: string;
  age: number;
}

const PersonCard: React.FC<PersonCardPropsP> = ({ name, age }) => {
  return (
    <div className="bg-blue-500 p-4 rounded shadow-md m-2">
      <div className="text-sm font-bold">{name} </div>
      <div className="text-sm">Age: {age}</div>
    </div>
  );
};

const PeopleCards = () => {
  return (
    <div className="p-4">
      {peopleData.people.map((person, index) => (
        <PersonCard key={index} name={person.name} age={person.age} />
      ))}
    </div>
  );
};

export default PeopleCards;
