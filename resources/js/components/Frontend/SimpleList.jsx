import { cn } from '@/lib/utils';


export default function SimpleList({ heading, children, className, ...rest }) {
  return (
    <div
      className={cn('px-6 border-l-2 border-gray-500/70', className)}
      {...rest}
    >
      {heading && (
        <h3 className="text-lg md:text-xl uppercase mb-4 dark:text-secondary-foreground font-semibold">
          {heading}
        </h3>
      )}
      <ul>{children}</ul>
    </div>
  );
}
