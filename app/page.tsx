import HeroImageSlider from "@/components/display/HeroImageSlider";
import GenerateImageInput from "@/components/form/GenerateImageInput";


export default function Home() {
  return (
    <div className="flex items-center justify-center m-5">
      <div className="grid max-w-4xl">
        <div className="my-20">
          <h1 className="text-7xl lg:text-9xl font-bold mb-2">
            <span className="text-8xl bg-gradient-to-t from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text animate-pulse">AI</span>
            <br />
            Image Generator
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illo aspernatur. Officia nobis labore quod blanditiis animi! Inventore reprehenderit incidunt optio ullam laboriosam, aliquid eius consectetur, voluptas voluptatem alias sapiente!</p>
        </div>
        <GenerateImageInput />
        <div className="relative">
          <HeroImageSlider />
        </div>
      </div>
    </div>
  );
}
