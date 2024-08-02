export default function PostTags({ tags }) {
  return (
    <div className="my-4 max-w-xl">
      <h4 className="mb-4 border-l-2 border-sky-800 pl-2 text-lg">Tags</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ id, name }) => (
          <span
            className="me-2 rounded bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-300"
            key={id}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
