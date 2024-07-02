import Section from '@/Components/Frontend/styles/section';

const ReformMonitor = ({ content, ...rest }) => {
  return (
    <Section
      px={['4', '8', '16']}
      size="full"
      py="80px"
      paddingBlock="50px"
      {...rest}
    >
      <iframe
        title="Reform Meter Dashboard_revised"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzE2YjYyODYtYTFjYy00OTU2LTgzNjQtOGNiYzhjNzBiMDBmIiwidCI6IjE2YWJhZmY3LTMwYjItNDVkYS1iZWMwLWIxY2RjMmZiYzdhZCIsImMiOjEwfQ%3D%3D&amp;embedImagePlaceholder=true"
        width="100%"
        height="1200"
        allowFullScreen="allowfullscreen"
      ></iframe>
    </Section>
  );
};

export default ReformMonitor;
