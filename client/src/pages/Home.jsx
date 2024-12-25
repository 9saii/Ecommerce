// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to Our eCommerce Store</h1>
//       <p>Browse our products and make your purchase today!</p>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import styled from 'styled-components';


const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5fbl5f5;
  padding: 20px;
`;

const HomeContent = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    line-height: 1.5;
    margin-bottom: 20px;
    color: #666;
  }

  button {
    display: flex;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 auto;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Home = () => {
    return (
      <HomeWrapper>
        <HomeContent>
          <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus vel quam auctor pulvinar. Donec ut turpis.</p>
          <button>Learn More</button>
        </HomeContent>
      </HomeWrapper>
    );
  };
  
  export default Home;


