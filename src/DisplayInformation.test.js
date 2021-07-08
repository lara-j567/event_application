import { render, screen } from '@testing-library/react';
import App from './App';
import DisplayInformation from "./DisplayInformation";
/*
test('renders learn react link', () => {
  render(<DisplayInformation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/

describe('<DisplayInformation/>' , ()=>{
  
  const wrapper = mount(
      <DisplayInformation artistInformationData={artistInformationData} artistEventData={artistEvents}/>
      
      );
  
  if('renders child correctly' , ()=>{
    
    expect(wrapper.find('div').children().to.have.length(artistInformationData.length));
    expect(wrapper.find('div').find('p').to.have.length(artistInformationData.length));
    
    
    
  });
  
  
})

