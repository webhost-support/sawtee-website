import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { router } from "@inertiajs/react";
import { useState } from "react";
export function TitleFilter({ table }) {
  const [value, setValue] = useState("");
  return (
    <Input
      placeholder="Filter posts using title..."
      value={value}
      onChange={(event) =>
        setValue(table.getColumn("title")?.setFilterValue(event.target.value))
      }
      className="max-w-sm"
    />
  );
}

export function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Input
      placeholder="Filter posts using title, author, tags, themes..."
      value={globalFilter}
      onChange={(event) => setGlobalFilter(event.target.value.toString())}
      className="max-w-sm"
    />
  );
}

export function CategoryFilter({ categories, value, label }) {
  const [selectedCategory, setSelectedCategory] = useState(value);
  function handleCategoryFilter(id) {
    setSelectedCategory(id);
    router.visit("/admin/posts", {
      data: { category_id: id },
      preserveState: true,
    });
  }
  return (
    <Select
      onValueChange={(value) => {
        handleCategoryFilter(value);
      }}
      value={value}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Filter using ${label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {categories?.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
