const ReformMonitor = ({ content, ...rest }) => {
  return (
    <section className="w-full px-10 py-20 lg:px-20" {...rest}>
      <iframe
        title="Reform Meter Dashboard_revised"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzE2YjYyODYtYTFjYy00OTU2LTgzNjQtOGNiYzhjNzBiMDBmIiwidCI6IjE2YWJhZmY3LTMwYjItNDVkYS1iZWMwLWIxY2RjMmZiYzdhZCIsImMiOjEwfQ%3D%3D&amp;embedImagePlaceholder=true"
        width="100%"
        height="1200"
        allowFullScreen="allowfullscreen"
      />
    </section>
  );
};

export default ReformMonitor;
