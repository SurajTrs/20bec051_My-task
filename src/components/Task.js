import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{task.name}</h3>
      <p className="text-gray-500">{task.dateAdded}</p>
      {/* Add more task details here */}
    </div>
  );
};
