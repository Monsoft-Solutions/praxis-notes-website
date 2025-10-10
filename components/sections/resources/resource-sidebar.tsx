import PopularResources from './popular-resources';
import type { ResourceWithRelations } from 'website/lib/types';

type ResourceSidebarProps = {
  currentResource: ResourceWithRelations;
};

export default async function ResourceSidebar({
  currentResource,
}: ResourceSidebarProps) {
  // Get the primary category for popular resources
  const primaryCategory = currentResource.categories[0];

  return (
    <div className="space-y-6">
      {/* See Also inline section */}
      {/* {seeAlsoResources.length > 0 && (
        <SeeAlsoSection resources={seeAlsoResources} />
      )} */}

      {/* Popular Resources widget */}
      {primaryCategory && (
        <PopularResources
          categoryId={primaryCategory.id}
          categoryName={primaryCategory.name}
          limit={5}
          excludeId={currentResource.id}
        />
      )}
    </div>
  );
}
