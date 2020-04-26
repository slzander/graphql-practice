import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Gravatar from 'react-gravatar';

const GET_USERS = gql`
    {
        users {
            id
            name
            email
            postsCount
        }
    }
`

function Users({ selectUser }){
    const { loading, error, data } = useQuery(GET_USERS)

    if (loading) return 'Loading...';
    if (error) return `Error ${error.message}`;
  
    return (
      <div className="flex flex-wrap items-center">
        {data.users.map(user => (
          <div className="lg:w-1/3 w-full p-4 border" key={user.id}>
            <Gravatar email={user.email} size={150} className="w-full" />
            <h3 className="font-bold text-xl">{user.name}</h3>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.postsCount} posts</p>
          </div>
        ))}
      </div>
    );
}

export default Users;
