import Select, { Option } from "./Select";
import { NewsAPICategory, NewsAPISoruce } from "../types/NewsAPI";
import Button from "./Button";
import { useState } from "react";
import { Preferences } from "../types";
import { useAppDispatch, useAppSelector } from "../store";
import { setPreferences } from "../store/slices/app";

export type FormProps = {
  categories: Option[];
  sources: NewsAPISoruce[];
}

export default function PrefferenceForm({ categories: categoriesAsOption, sources: data }: FormProps) {
  const [formData, setFormData] = useState<Preferences>();

  const preferences = useAppSelector(store => store.appSlice.preferences);
  

  const dispatch = useAppDispatch();

  const sources = data?.map((source) => ({
      label: source.name,
      value: source.name,
    })) || [];

  return (
    <div className="flex gap-3 flex-col">
     
      <Select
        label="Source"
        options={sources}
        onChange={(e) =>
          setFormData((prev) => ({ ...(prev || {}), source: e.target.value }))
        }
        value={preferences?.source || formData?.source}
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
        value={preferences?.category || formData?.category}
      />
    
      <Button label="Save Preferences" onClick={() => {dispatch(setPreferences(formData)); alert('Prefernce Saved!')}} />
    </div>
  );
}
