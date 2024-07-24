import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { slugify } from "@/lib/helpers";
import { Divider, useColorModeValue } from "@chakra-ui/react";

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

export const Members = ({ memberInstitutions }) => {
  return (
    <div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold  font-sans py-4 mb-4">
        {"Member Institutions"}
      </h3>

      {memberInstitutions?.map(({ country, institutes, id }) => {
        return (
          <Accordion key={id} collapsible className="w-full">
            <AccordionItem border="none" value={country}>
              <AccordionTrigger>
                <p className="font-bold font-sans text-lg md:text-xl">
                  {country}
                </p>
              </AccordionTrigger>
              <AccordionContent className="ml-6">
                <ol className="space-y-2 text-muted-foreground list-decimal">
                  {institutes.map(({ member_name, member_website_link }) => {
                    return (
                      <li key={member_name}>
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

export const PageSection = ({ section, sections }) => {
  const { title, slug, description } = section;

  const isTabs = section.type === "tabs";
  const isAccordian = section.type === "accordian";
  const isDefault = section.type === "default";
  const tabColor = useColorModeValue("blackAlpha", "whiteAlpha");

  const sectionID = slugify(title);

  const childSections = sections.filter((sec) => sec.parent_id === section.id);
  return (
    <div id={sectionID}>
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl py-4 mb-4 font-sans text-primary">
        {title}
      </h2>

      {isTabs && childSections.length > 0 && (
        <div className="px-6 py-4">
          <Tabs defaultValue={childSections[0].title} orientation="vertical">
            <TabsList className="grid w-full grid-cols-3 dark:bg-[rgba(0,0,0,0.1)] bg-opacity-60 ">
              {childSections.map(({ title }) => (
                <TabsTrigger key={title} value={title} className="">
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>
            {childSections.map(({ description, title }) => (
              <TabsContent
                key={title}
                value={title}
                className="bg-[rgba(0,0,0,0.1)] bg-opacity-60 space-y-2 rounded-xl leading-8 p-6 text-muted-foreground"
              >
                {description && (
                  <p
                    className="px-4 list-decimal"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
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
                <AccordionContent>
                  <div
                    className="leading-8 p-6 text-lg text-muted-foreground"
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
          className="text-muted-foreground"
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
