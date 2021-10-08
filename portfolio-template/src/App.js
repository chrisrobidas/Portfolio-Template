import { useState } from 'react';
import { 
  AboutSection,
  ContactForm,
  ContactFormInput,
  ContactFormSubmitButton,
  ContactFormTextArea,
  ContactSection,
  Footer,
  FooterLastUpdated,
  FooterText,
  HomeSection, 
  HomeText,
  NameText,
  Portfolio,
  ProjectsSection,
  SectionTitle
} from './style.js';

function App() {

  const your_name = 'your_name';
  const your_email = 'christopher.robidas@outlook.com';

  const [formSubject, setFormSubject] = useState();
  const [formMessage, setFormMessage] = useState();

  const handleFormSubjectChange = (event) => {
    setFormSubject(event.target.value);
  };

  const handleFormMessageChange = (event) => {
    setFormMessage(event.target.value);
  };

  return (
    <Portfolio>
      <HomeSection>
          <HomeText>
            Hello World!
            <br/>
            I'm <NameText>{your_name}</NameText>,
            <br/>
            a full-stack web developer.
          </HomeText>
      </HomeSection>
      <AboutSection>
        <SectionTitle>
          WHOAMI
        </SectionTitle>
      </AboutSection>
      <ProjectsSection>
        <SectionTitle>
          MY PROJECTS
        </SectionTitle>
      </ProjectsSection>
      <ContactSection>
        <SectionTitle>
          CONTACT ME
        </SectionTitle>
        <ContactForm action={`mailto:${your_email}?subject=${formSubject}&body=${formMessage}`} method="get" enctype="text/plain">
          <ContactFormInput type="text" id="subject" name="subject" placeholder="Subject" value={formSubject} onChange={handleFormSubjectChange} required/>
          <ContactFormTextArea id="message" name="message" placeholder="Message" value={formMessage} onChange={handleFormMessageChange} required/>
          <ContactFormSubmitButton type="submit" id="submit-button">
            SUBMIT
          </ContactFormSubmitButton>
        </ContactForm>
      </ContactSection>
      <Footer>
        <FooterText>
          {your_name} <FooterLastUpdated>©2015</FooterLastUpdated>
        </FooterText>
      </Footer>
    </Portfolio>
  );
}

export default App;
