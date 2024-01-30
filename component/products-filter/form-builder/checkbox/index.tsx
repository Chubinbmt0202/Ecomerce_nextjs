import Link from "next/link";

// phần định nghĩa kiểu checkbox
type CheckboxType = {
	label: string;
	onClick: (label: string) => void;
	isActive: boolean;
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
  }

const Checkbox = ({ label, onClick, isActive }: CheckboxType) => (
    <Link href={"/shop?hoodies"}>
      <div
        className={`flex items-center cursor-pointer ${isActive ? 'selected-category' : ''}`}
        onClick={() => onClick(label)}
      >
        {/* ... */}
        <span
          className={classNames(
            "ml-2",
            isActive ? "font-semibold text-blue-500" : "text-gray-500",
          )}
        >
          {label}
        </span>
      </div>
    </Link>
)
export default Checkbox