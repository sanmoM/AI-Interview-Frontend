import Badge from "@/components/ui/badge";
import React from "react";
import ContentWrapper from "@/components/shared/wrapper/content-wrapper";

export default function ItemCard({ title, description, category }) {
  return (
    <ContentWrapper>
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start mb-1.5">
        <h3 className="text-sm font-semibold text-text-primary pr-4">
          {title}
        </h3>
        {category && (
          <Badge className="text-[10px] p-0.5 px-2 font-medium uppercase shrink-0 tracking-wide">
            {category}
          </Badge>
        )}
      </div>
      <p className="text-text-gray text-xs mb-3 line-clamp-2 leading-relaxed">
        {description}
      </p>
      <div className="flex gap-4 text-xs font-medium">
        <button className="text-primary cursor-pointer hover:underline transition-colors">
          Edit
        </button>
        {/* <button className="text-primary cursor-pointer hover:underline transition-colors">
          Change category
        </button> */}
        <button className="text-red-500 cursor-pointer hover:underline transition-colors">
          Delete
        </button>
      </div>
    </ContentWrapper>
  );
}
