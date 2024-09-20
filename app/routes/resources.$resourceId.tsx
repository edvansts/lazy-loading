import { type MetaFunction } from "@remix-run/node";
import { Navigate, useParams } from "@remix-run/react";
import { resources } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "Resource Info" },
    { name: "description", content: "Welcome to resources!" },
  ];
};

export default function ResourceDetails() {
  const params = useParams<{ resourceId: string }>();

  const resourceId = params.resourceId;
  const resource = resources.find((resource) => resourceId === resource.id);

  if (!resource) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Resources</span>
          </h1>
        </header>
        <main>
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            This is a resource page!
          </p>

          <ul>
            <li>
              {resource.icon} {resource.text}
            </li>

            <li>Resource ID: {resource.id}</li>
          </ul>
        </main>
      </div>
    </div>
  );
}
