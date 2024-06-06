'use client';

import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition z-50"
    >
      ⬅️ Back
    </button>
  );
};

export default BackButton;
