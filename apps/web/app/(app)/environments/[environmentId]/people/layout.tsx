import ContentWrapper from "@/app/shared/ContentWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People",
};

export default function PeopleLayout({ children }) {
  return (
    <>
      {/* 
      <PeopleGroupsTabs activeId="people" environmentId={params.environmentId} /> */}
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}
