// import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>We are a leading eCommerce company offering quality products.</p>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import styled from 'styled-components';


const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const AboutContent = styled.div`
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
  }

  p {
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const About = () => {
    return (
      <AboutWrapper>
        <AboutContent>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus vel quam auctor pulvinar. Donec ut turpis.</p>
        </AboutContent>
      </AboutWrapper>
    );
  };
  
  export default About;
