export function SectionQuote(props: { qT1: string; qT2: string }) {
  return (
    <h2 className="text-5xl md:text-6xl mb-6">
      {props.qT1}
      <br />
      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        {props.qT2}
      </span>
    </h2>
  );
}
