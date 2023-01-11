## Technology:

- React
- Typescript
- MUI library
- Tailwind CSS
- Redux Toolkits.

## About:

Create an e-commerce website using https://fakeapi.platzi.com/

You can take a look at the deployed project here: (https://dqk-e-commerce.netlify.app/).

## Steps to run the Code

- Clone the repository to your local machine.
- install dependencies: `npm install`
- run the project: `npm start`

## Structure

├───public
|
│
└───src
    │   App.tsx
    │   index.tsx
    │   react-app-env.d.ts
    |
    |───assests
    |     clothes.jpg
    |
    |───hooks
    |      reduxHook.tsx
    |
    ├───pages
    │   |───CartPage
    │   │       CartLayout.tsx
    │   │       Cart.tsx
    │   │   
    │   │
    │   ├───CreateProductPage
    │   │       CreateProduct.tsx
    │   │
    │   ├───EditProduct
    │   │       EditProduct.tsx
    │   │       
    │   │───HomePage       
    │   │       Home.tsx
    │   │      
    │   │───LoginPage       
    │   │       Login.tsx
    |   |
    │   ├───RegisterPage
    │   │       Register.tsx
    │   │      
    │   │───ProfilePage
    |   |       Profile
    |   |───RootPage
    |   |       Root.tsx
    |   | 
    │   └───NotFound
    │           NotFound
    │
    ├───redux
    │   │   store.ts
    │   │
    │   └───reducers
    │           cartReducer.ts
    │           productReducer.ts
    │           categoryReducer.ts
    │           userReducer.ts
    |
    ├───styles
    │       Home.css
    │       Root.css
    │
    └───types
            category.ts
            product.ts
            