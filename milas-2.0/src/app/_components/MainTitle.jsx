import H1 from "./H1";
import ParagraphDescription from "./ParagraphDesc";
import TitleDescription from "./TitleDescription";
export default function MainTitle({ miniTitle, Title, desc }) {
  return (
    <div className="w-[90%] m-auto text-center">
      <TitleDescription>{miniTitle}</TitleDescription>
      <H1>{Title}</H1>
      <ParagraphDescription>{desc}</ParagraphDescription>
    </div>
  );
}
