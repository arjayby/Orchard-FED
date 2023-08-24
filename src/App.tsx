import { ButtonLink, Image, ImageDialog } from "./components";
import { latestBlogsSectionData, mainSectionData } from "./data";

export default function App() {
  const handleClickBlogCard = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = "/#"; // to simulate the anchor element href
    console.log(event);
  };

  const handleClickReadMore = (event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(event);
  };

  return (
    <div className="max-w-[1220px] container mx-auto my-44 px-4 text-white">
      <div className="my-44">
        <div className="grid gap-3 lg:grid-cols-3 sm:grid-cols-2 sm:gap-6">
          <div className="mx-auto">
            <ImageDialog {...mainSectionData.images[0]} />
          </div>
          <div className="flex flex-col gap-5">
            <ImageDialog {...mainSectionData.images[1]} />
            <ImageDialog {...mainSectionData.images[2]} />
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h1 className="text-[1.75rem] font-light">
              {mainSectionData.title}
            </h1>
            <div className="h-[1px] max-w-full mt-4 bg-white" />
            <p className="my-10 text-xl text-gray-300 font-extralight">
              {mainSectionData.description}
            </p>
            <strong className="text-primary">BE MINDFUL</strong>
            <div className="mt-5" />
            <strong className="text-lg font-medium">
              {mainSectionData.intro}
            </strong>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-20 text-[2.75rem] font-thin text-center">
          ALL THE LATEST FROM AEG
        </h2>
        <div className="grid gap-16 lg:grid-cols-3 sm:grid-cols-2 sm:gap-6">
          {latestBlogsSectionData.map((blog) => (
            <div
              id={blog.title}
              key={blog.title}
              className="flex flex-col gap-6 cursor-pointer group"
              onClick={handleClickBlogCard}
            >
              <Image {...blog.images[0]} withBorderBottom />
              <strong className="text-lg font-medium">{blog.title}</strong>
              <p className="text-lg font-thin text-gray-300">{blog.intro}</p>
              <ButtonLink href="#" onClick={handleClickReadMore}>
                READ MORE
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
