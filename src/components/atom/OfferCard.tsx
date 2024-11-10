export default function OfferCard({ content, title }: { title: string; content: string }) {
  return (
    <div className="flex flex-col gap-2 border-t border-white text-white">
      <h1 className={'text-[18px] font-black mt-[8px]'}>{title}</h1>
      <p className={'font-black text-[16px] opacity-80'}>{content}</p>
    </div>
  );
}
