import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import { useEffect, useState } from 'react';
const ReformMonitor = ({ content, ...rest }) => {
  const reportUrl = import.meta.env.VITE_REFORM_PLATFORM_EMBBED_URL;
  const [reportConfig, setReportConfig] = useState({
    type: 'report',
    embedUrl: undefined,
    accessToken: undefined,
    id: undefined,
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: true,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  });
  useEffect(() => {
    axios.get(reportUrl).then(response => {
      setReportConfig({
        ...reportConfig,
        embedUrl: response.value.embedUrl,
        accessToken: response.value.token,
        id: response.value.id,
      });
    });
  }, []);
  return (
    <section className="w-full px-10 py-20 lg:px-20" {...rest}>
      <PowerBIEmbed
        embedConfig={reportConfig}
        cssClassName="power-bi-report-class"
      />
      <iframe
        title="Reform Meter Dashboard_revised"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzE2YjYyODYtYTFjYy00OTU2LTgzNjQtOGNiYzhjNzBiMDBmIiwidCI6IjE2YWJhZmY3LTMwYjItNDVkYS1iZWMwLWIxY2RjMmZiYzdhZCIsImMiOjEwfQ%3D%3D&amp;embedImagePlaceholder=true"
        width="100%"
        height="1200"
        loading="lazy"
        allowFullScreen="allowfullscreen"
        className="mt-10 w-full dark:bg-black"
      />
    </section>
  );
};

export default ReformMonitor;
