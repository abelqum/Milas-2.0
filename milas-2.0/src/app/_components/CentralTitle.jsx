export default function CentralTitle({ title, description }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-2 text-slate-900">
        {title}
      </h2>
      <p className="text-slate-500 mt-4 max-w-2xl m-auto text-lg">
        {description}
      </p>
    </div>
  );
}
