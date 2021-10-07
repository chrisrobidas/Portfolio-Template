import { 
  AboutSection,
  ContactSection,
  Footer,
  FooterLastUpdated,
  FooterText,
  HomeSection, 
  HomeText,
  NameText,
  ProjectsSection,
  SectionTitle
} from './style.js';

function App() {

  const your_name = 'your_name';

  return (
    <div>
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
      </ContactSection>
      <Footer>
        <FooterText>
          {your_name} <FooterLastUpdated>©2015</FooterLastUpdated>
        </FooterText>
      </Footer>
    </div>
  );
}

export default App;
