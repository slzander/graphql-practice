module Types
  class QueryType < Types::BaseObject
    # /users
    field :users, [Types:UserType], null: false
  end
end
