import FeaturedMedia from "@/components/Frontend/post/featured-media";
import PostHeader from "@/components/Frontend/post/post-header";
import { cn } from "@/lib/utils";

export const PageLayout = ({ title, featured_image, srcSet, children }) => {
  const hasFeaturedImage = featured_image && featured_image !== "";

  return (
    <div className="bg-background dark:bg-black/90">
      <div class="relative z-0 w-full h-80 max-h-80 bg-gray-400/20 dark:bg-black/85 ">
        {hasFeaturedImage ? (
          <FeaturedMedia
            src={featured_image}
            srcSet={srcSet}
            className={"max-h-80"}
          />
        ) : (
          <div
            className="w-full h-full absolute inset-0 -z-[1] bg-[url(/assets/pattern-tile-green.svg)] dark:bg-[url(/assets/pattern-tile-light-fade.svg)] "
            style={{
              backgroundSize: "1018px",
              backgroundPosition: "top center",
              backgroundBlendMode: "overlay",
            }}
          />
        )}
        <PostHeader
          className={cn(
            "absolute bottom-4 left-12 px-2 z-10 text-left",
            hasFeaturedImage
              ? "text-gray-100"
              : "text-gray-800 dark:text-gray-200",
          )}
          heading={title}
        />
      </div>
      {children}
    </div>
  );
};
