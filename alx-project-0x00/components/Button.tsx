type ButtonProps = {
  title: string;
  styles?: string;
};

export default function Button({ title, styles }: ButtonProps) {
  return (
    <button className={`bg-blue-600 text-white px-4 py-2 font-medium ${styles}`}>
      {title}
    </button>
  );
}
