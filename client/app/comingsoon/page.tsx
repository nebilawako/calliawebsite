
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
        Coming Soon!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
        We're working hard to bring this page to you. Stay tuned!
      </p>
      <Link href="/" passHref>
        <Button className="mt-8">Back to Home</Button>
      </Link>
    </div>
  );
};

export default ComingSoon;
