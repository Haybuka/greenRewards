import React from 'react';

interface User {
  id: number;
  name: string;
}

const Page = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });
  //cache behaviour only works with fetch, if yu use another like axios, it bebcomes an issh.
  const users: User[] = await response.json();
  return (
    <>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Page;
