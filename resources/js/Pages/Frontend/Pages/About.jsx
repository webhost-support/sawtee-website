import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { slugify } from '@/lib/helpers';
import { cn, htmlToText } from '@/lib/utils';

export default function About({ sections, content, pageData }) {
  return (
    <div className="page-content px-[32px] md:px-0 mx-auto py-[80px] max-w-2xl leading-8 text-lg ">
      {sections?.map((section) => {
        if (section.parent_id === null) {
          return (
            <PageSection
              key={section.title}
              section={section}
              sections={sections}
            />
          );
        }
      })}
      {pageData && <Members memberInstitutions={pageData} />}
    </div>
  );
}

 const Members = ({ memberInstitutions }) => {
  return (
    <div>
      <PageSectionTitle titleText={'Member Institutions'} />

      {memberInstitutions?.map(({ country, institutes, id }) => {
        return (
          <Accordion key={id} collapsible className="w-full">
            <AccordionItem border="none" value={country}>
              <AccordionTrigger>
                <p className="font-bold font-sans text-xl md:text-2xl text-primary">
                  {country}
                </p>
              </AccordionTrigger>
              <AccordionContent className="ml-6">
                <ol className="space-y-2 text-zinc-700 dark:text-zinc-300 list-decimal">
                  {institutes.map(({ member_name, member_website_link }) => {
                    return (
                      <li key={member_name} className="text-lg">
                        <a
                          target="_blank"
                          title={member_name}
                          ariaLabel={member_name}
                          href={member_website_link}
                          rel="noreferrer"
                        >
                          {member_name}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

 const PageSection = ({ section, sections }) => {
  const { title, slug, description } = section;

  const isTabs = section.type === 'tabs';
  const isAccordian = section.type === 'accordian';
  const isDefault = section.type === 'default';

  const sectionID = slugify(title);

  const childSections = sections.filter(sec => sec.parent_id === section.id);
  return (
    <div id={sectionID}>
      <PageSectionTitle titleText={title} />

      {isTabs && childSections.length > 0 && (
        <div className="px-6 py-4">
          <Tabs defaultValue={childSections[0].title} orientation="vertical">
            <TabsList className="grid w-full grid-cols-3 bg-bgDarker bg-opacity-60 h-auto p-2">
              {childSections.map(({ title }) => (
                <TabsTrigger key={title} value={title}>
                  <p className="font-bold font-sans text-lg md:text-xl">
                    {title}
                  </p>
                </TabsTrigger>
              ))}
            </TabsList>
            {childSections.map(({ description, title }) => (
              <TabsContent
                key={title}
                value={title}
                className="bg-bgDarker bg-opacity-60 space-y-2 rounded-xl leading-8 p-6 text-zinc-700 dark:text-zinc-300"
              >
                {description && (
                  <p className="px-4 list-decimal">{htmlToText(description)}</p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {isAccordian &&
        childSections?.map(({ title, description }) => {
          return (
            <Accordion key={title} collapsible className="w-full">
              <AccordionItem value={title}>
                <AccordionTrigger>
                  <p className="font-bold text-primary font-sans text-lg md:text-xl">
                    {title}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="bg-bgDarker rounded-md bg-opacity-60">
                  <div
                    className="leading-8 p-6 text-lg text-zinc-700 dark:text-zinc-300"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}

      {isDefault && (
        <div
          className="text-zinc-700 dark:text-zinc-300"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      )}
      <Separator className="my-20" />
    </div>
  );
};


const PageSectionTitle = ({ titleText, className }) => {
  return (
    <h2
      className={cn(
        'font-bold text-2xl md:text-3xl lg:text-4xl py-4 mb-4 font-sans text-primary',
        className
      )}
    >
      {titleText}
    </h2>
  );
}
