export function SectionHeaderName(props: {sectionName:string}) {
  return (
    <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {props.sectionName}
      </span>
    </div>
  );
}
