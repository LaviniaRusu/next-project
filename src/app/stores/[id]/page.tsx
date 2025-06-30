"use client";

import GroupedDepts from "@/components/GroupedDepts";
import useFetch from "@/hooks/useFetch";
import { fetchStores } from "@/services/fetchStoreID";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StoreInfo, Dept } from "@/Types/interfaces";
import { Loader, LoaderCircle } from "lucide-react";
import { toast } from "sonner";

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
  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      toast(
        "Magazinul nu a fost găsit. Întoarce-te înapoi la magazinele existente.",
        { duration: 5000 }
      );
    }
  }, [fetchError]);

  if (loading)
    return (
      <div>
        <LoaderCircle className="animate-spin" />
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col items-center justify-center py-10">
        {error}
        <button
          onClick={() => (window.location.href = "/stores")}
          className="px-4 py-1 bg-blue-700 text-white rounded hover:bg-blue-600"
        >
          Spre magazine
        </button>
      </div>
    );
  if (!departments.length) return <div>Departamente nu au fost găsite.</div>;
  if (!storeInfo) return null;

  return (
    <div>
      <GroupedDepts apiresp={{ deps: departments, storeInfo }} />
    </div>
  );
};

export default DepartmentPage;
