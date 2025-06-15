"use client";

import GroupedDepts from "@/components/GroupedDepts";
import useFetch from "@/hooks/useFetch";
import { fetchStores } from "@/services/fetchStoreID";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StoreInfo, Dept } from "@/Types/interfaces";
import { Loader, LoaderCircle } from "lucide-react";

const DepartmentPage = () => {
  const { id } = useParams();
  const storeId = Number(id);

  const [departments, setDepartments] = useState<Dept[]>([]);
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);
  const [error, setError] = useState<string>("");

  const {
    data,
    loading,
    error: fetchError,
    refetch,
  } = useFetch(() => fetchStores(storeId), false);

  useEffect(() => {
    if (storeId) {
      refetch();
    }
  }, [storeId]);

  useEffect(() => {
    if (data) {
      setDepartments(data.departments);
      setStoreInfo(data.storeInfo);
    }
  }, [data]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
    }
  }, [fetchError]);

  if (loading)
    return (
      <div>
        {" "}
        <LoaderCircle className="animate-spin" />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!departments.length) return <div>Departamente nu au fost găsite.</div>;
  if (!storeInfo) return null;

  return (
    <div>
      <GroupedDepts apiresp={{ deps: departments, storeInfo }} />
    </div>
  );
};

export default DepartmentPage;
