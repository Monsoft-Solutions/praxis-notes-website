import PopularResources from './popular-resources';
import SeeAlsoSection from './see-also-section';
import { getRelatedResources } from 'website/lib/resources';
import type { ResourceWithRelations } from 'website/lib/types';

type ResourceSidebarProps = {
  currentResource: ResourceWithRelations;
};

export default async function ResourceSidebar({
  currentResource,
}: ResourceSidebarProps) {
  const categoryIds = currentResource.categories.map(cat => cat.id);
  const tagIds = currentResource.tags.map(tag => tag.id);

  // Get related resources for "See Also" section
  const seeAlsoResources = await getRelatedResources(
    currentResource.id,
    categoryIds,
    tagIds,
    3,
    currentResource.readingTime || undefined
  );

  // Get the primary category for popular resources
  const primaryCategory = currentResource.categories[0];

  return (
    <div className="space-y-6">
      {/* See Also inline section */}
      {seeAlsoResources.length > 0 && (
        <SeeAlsoSection resources={seeAlsoResources} />
      )}

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
