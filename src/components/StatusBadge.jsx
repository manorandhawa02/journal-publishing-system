export default function StatusBadge({ status }) {
  const getColor = () => {
    switch (status) {
      case "Submitted":
        return "bg-blue-500";
      case "Under Review":
        return "bg-yellow-500";
      case "Accepted":
        return "bg-green-600";
      case "Rejected":
        return "bg-red-600";
      case "Minor Revision":
        return "bg-purple-500";
      case "Major Revision":
        return "bg-orange-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <span className={`${getColor()} text-white px-3 py-1 rounded-full text-sm`}>
      {status}
    </span>
  );
}