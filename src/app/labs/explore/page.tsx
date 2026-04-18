import ExploreHeader from "@/components/page/explore-header";
import ExploreComponentsList from "@/components/page/explore-components";
export default function ExploreComponents() {
  return (
    <main
      id="explore-page"
      className="mt-10 max-w-3xl mx-auto w-full pb-10 max-md:px-5"
    >
      <div className="max-w-3xl mx-auto">
        <ExploreHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExploreComponentsList />
        </div>
      </div>
    </main>
  );
}
