type Props = {
  title: string;
  value: number;
};

export default function KPICard({ title, value }: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="mt-2 text-2xl font-bold">
        {value.toLocaleString()}
      </h2>
    </div>
  );
}