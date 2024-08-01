export default function PostTags({ tags }) {
  return (
    <div className="my-4 max-w-md p-2">
      <h4 className="mb-4 border-l-2 border-sky-800 pl-2 text-lg">Tags</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ id, name }) => (
          <span
            className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
            key={id}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
