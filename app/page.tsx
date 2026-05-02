import { BookingBehavior } from "./booking-behavior";
import { pageHtml } from "./pageContent";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
      <BookingBehavior />
    </>
  );
}
