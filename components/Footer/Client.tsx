"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  FooterSubGroup,
  ContactUs,
  Socials,
  FooterBrand,
  FooterLinkGroup,
  FooterLink,
  FooterOfficeHours,
} from "./types";
import { cleanUrl } from "@/lib/utils";

type FooterProps = {
  brand: FooterBrand;
  copyright: string;
  contactUs: ContactUs;
  linkGroups: FooterLinkGroup[];
  officeHours: FooterOfficeHours;
  policyAndTermsLinks: FooterLink[];
  socials: Socials;
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="font-freight text-lg md:text-2xl text-yellow-500">
      {children}
    </h4>
  );
};

const LinksList = ({
  links,
  className = "text-xs md:text-sm text-yellow-100 font-semibold",
}: {
  links: { label: string; url: string }[];
  className?: string;
}) => {
  return (
    <ul className="mt-1 md:mt-2 space-y-2">
      {links?.map((link, i) => (
        <li key={i}>
          <Link href={cleanUrl(link.url) || "/"} className={className}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const SubGroupSection = ({ sg }: { sg: FooterSubGroup }) => {
  return (
    <div>
      <SectionTitle>{sg.label}</SectionTitle>
      <LinksList links={sg.links || []} />
    </div>
  );
};

const ContactUsSection = ({ contact }: { contact: ContactUs }) => {
  if (!contact) return null;
  return (
    <div>
      <SectionTitle>{contact.label}</SectionTitle>
      <LinksList links={contact.options || []} />
    </div>
  );
};

const SocialsSection = ({ socials }: { socials: Socials }) => {
  if (!socials) return null;
  return (
    <div>
      <SectionTitle>{socials.label}</SectionTitle>
      <div className="mt-2 flex space-x-5">
        {socials.handles?.map(({ label, url, icon }, i) => (
          <Link
            key={i}
            href={cleanUrl(url) || "/"}
            className="h-6 w-6 rounded-full overflow-hidden relative"
          >
            <Image
              src={icon}
              className="object-cover"
              alt={`${label} handle logo`}
              fill
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const FooterClient = ({
  brand,
  officeHours,
  contactUs,
  linkGroups,
  policyAndTermsLinks,
  copyright,
  socials,
}: FooterProps) => {
  const groups = (linkGroups || []).flatMap((group) => group.subGroup || []);

  const policyLinks = policyAndTermsLinks || [];
  const logoUrl = cleanUrl(brand?.logo || "");

  return (
    <footer className="w-full bg-primary-foreground text-zinc-100 border-t border-white/10 relative py-10 md:py-20 overflow-hidden">
      <div className="absolute  bottom-40 -right-20 md:bottom-0 md:right-0 h-[157.5px] w-[315px] md:h-[270px] md:w-[540px] z-0">
        <Image
          src="/assets/illustrations/house-shape.svg"
          alt="house shape"
          fill
          className="object-contain"
        />
      </div>
      <div className="mx-auto md:max-w-[110rem] px-6 md:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-10 md:gap-y-0">
          <div className="col-span-1 space-y-10">
            {logoUrl && (
              <div className="relative h-[32px] w-[136px] md:h-[36px] md:w-[153px]">
                <Image
                  src={logoUrl}
                  alt="brand logo"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {brand?.tagLine && (
              <p className="text-sm md:text-base text-yellow-100 whitespace-break-spaces">
                {brand.tagLine}
              </p>
            )}
            {officeHours && (
              <div className="md:mt-12">
                <SectionTitle>{officeHours.label}</SectionTitle>
                <p className="mt-3 text-sm md:text-base text-yellow-100">
                  {officeHours.weekdays}
                </p>
                <p className="mt-1 text-sm md:text-base text-yellow-100">
                  {officeHours.saturdays}
                </p>
              </div>
            )}
            {contactUs && (
              <div className="md:hidden">
                <ContactUsSection contact={contactUs} />
              </div>
            )}
            {socials && (
              <div className="md:hidden">
                <SocialsSection socials={socials} />
              </div>
            )}
          </div>

          <div className="md:hidden z-2">
            <Accordion type="single" collapsible>
              {groups.map((group, gIndex) => (
                <AccordionItem
                  key={gIndex}
                  value={`group-${gIndex}`}
                  className="border-0"
                >
                  <AccordionTrigger className="font-freight text-lg text-yellow-500">
                    <SectionTitle>{group.label}</SectionTitle>
                  </AccordionTrigger>
                  <AccordionContent>
                    <LinksList
                      links={group.links || []}
                      className="text-xs text-yellow-100 font-semibold"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="hidden md:grid grid-cols-3 md:gap-x-5 gap-y-10 md:gap-y-0">
            {linkGroups.map((group, index) => (
              <div key={index} className="space-y-10 md:space-y-8">
                {group.subGroup.map((sg, sgIndex) => (
                  <SubGroupSection key={`${index}-${sgIndex}`} sg={sg} />
                ))}
              </div>
            ))}
            <div className="space-y-10 md:space-y-8">
              {contactUs && (
                <div className="hidden md:block">
                  <ContactUsSection contact={contactUs} />
                </div>
              )}
              {socials && (
                <div className="hidden md:block">
                  <SocialsSection socials={socials} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="my-10 md:my-14 h-px w-full bg-yellow-100" />

        <div className="relative z-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="text-xs text-yellow-100 md:whitespace-break-spaces font-medium">
            {copyright}
          </p>
          <div className="flex items-center gap-6">
            {policyLinks.map((pl, idx) => (
              <Link
                key={idx}
                href={cleanUrl(pl.url) || "/"}
                className="text-xs text-yellow-100  font-medium"
              >
                {pl.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterClient;
