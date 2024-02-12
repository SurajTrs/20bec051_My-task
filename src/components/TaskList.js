import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{task.name}</h3>
          <p className="text-gray-500">{task.dateAdded}</p>
          {/* Add more task details here */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;