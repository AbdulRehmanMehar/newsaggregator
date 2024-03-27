import Select from "../components/Select";
import Input from "../components/Input";
import { NewsAPICategory } from "../types/NewsAPI";
import Button from "./Button";
import { useState } from "react";
import { Filters } from "../types";
import { useAppDispatch } from "../store";
import { setFilters } from "../store/slices/app";
import { FormProps } from "./PreferenceForm";


export default function FiltersForm({ categories: categoriesAsOption, sources: data }: FormProps) {
  const [formData, setFormData] = useState<Filters>();

  const dispatch = useAppDispatch();

  const sources =
    data?.map((source) => ({
      label: source.name,
      value: source.name,
    })) || [];

  return (
    <div className="flex gap-3 flex-col">
      <Input
        label="Keywords"
        type="text"
        onChange={(e) =>
          setFormData((prev) => ({ ...(prev || {}), keywords: e.target.value }))
        }
        value={formData?.keywords}
      />
      <Select
        label="Source"
        options={sources}
        onChange={(e) =>
          setFormData((prev) => ({ ...(prev || {}), source: e.target.value }))
        }
        value={formData?.source}
      />
      <Select
        label="Category"
        options={categoriesAsOption}
        onChange={(e) =>
          setFormData((prev) => ({
            ...(prev || {}),
            category: e.target.value as NewsAPICategory,
          }))
        }
        value={formData?.category}
      />
      <Input
        label="Date"
        type="date"
        onChange={(e) =>
          setFormData((prev) => ({ ...(prev || {}), date: e.target.value }))
        }
        value={formData?.date}
      />
      <Button label="Search" onClick={() => dispatch(setFilters(formData))} />
    </div>
  );
}
