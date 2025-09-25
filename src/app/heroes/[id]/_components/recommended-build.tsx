import { Item, RecommendedBuild } from "@/types/database";
import React from "react";
import { getItemByIdAction } from "../action";
import Image from "next/image";

export default async function RecommendedBuildSection({
  build,
}: {
  build: RecommendedBuild[] | null;
}) {
  // collect item IDs and exclude possible nulls before calling the action
  const itemIds: string[] =
    (build?.flatMap((b) => b.items) ?? []).filter(
      (id): id is string => id !== null
    );

  const items: Item[] = (
    await Promise.all(
      itemIds.map(async (itemId) => {
        const item = await getItemByIdAction(itemId);
        return item;
      })
    )
  ).filter((i): i is Item => i !== null);

  return (
    <div>
      <h2 className="text-shadow-lg text-xl">Recommended Build</h2>
      {/* item icons */}
      <div className="flex flex-row gap-4 mt-2">
        {items?.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item?.avatar || "/placeholder-item.png"}
              alt={item?.name || "Item"}
              className="w-10 h-10"
            />
            <p className="text-sm text-center">{item?.name || "Item"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
