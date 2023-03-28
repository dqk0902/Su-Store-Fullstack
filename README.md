## Technology:

- React
- Typescript
- MUI library
- Tailwind CSS
- Redux Toolkits.
- C#.
- ASP.NET Core
- EntityFramework Core
- PostgreSQL

## About:

Create a fullstack e-commerce website allow user to use CRUD function with different roles and authentication. 

You can take a look at the fullstack-project deployed project here: (https://su-store-dqk.netlify.app/).

## Steps to run the Code

- Clone the repository to your local machine.
- install dependencies: `npm install`, `dotnet restore`
- run the project in frontend: `npm start`
- run the project in backend: `dotnet run`

## Endpoints:

PRODUCTS:
Get all products
[GET] https://localhost:7064/products

Get a single product
[GET] https://localhost:7064/products/{id}

Create a product
[POST] https://localhost:7064/products

Update a product
[PUT] https://localhost:7064/products/{id}

Delete a product
[DELETE] https://localhost:7064/products/{id}

CATEGORIES:
Get all categories
[GET] https://localhost:7064/categories

Get a single category
[GET] https://localhost:7064/categories/{id}

Create a category
[POST] https://localhost:7064/categories

Update a category
[PUT] https://localhost:7064/categories/{id}

Delete a category
[DELETE] https://localhost:7064/categories/{id}

USERS:
Get all users
[GET] https://localhost:7064/users

Get a single user
[GET] https://localhost:7064/users/{id}

Update a user
[PUT] https://localhost:7064/users/{id}

Delete a user
[DELETE] https://localhost:7064/users/{id}

Signup:
[POST] https://localhost:7064/users/signup

Signin:
[POST] https://localhost:7064/users/login
The response is an access JWT tokens and expiration, for example like this:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg",
  "expiration": 2,
}

Get user with session:
[GET] https://localhost:7064/users/profile
# Headers
{
  "Authorization": "Bearer {your access token}"
}

